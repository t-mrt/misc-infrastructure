import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam'

export class UserStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const user = new iam.User(this, 'GeneralPurposeUser', {
      userName: "t_"
    });

    const role = new iam.Role(this, 'PowerUserRole', {
      assumedBy: new iam.ArnPrincipal(user.userArn).withConditions({
        Bool: {
          "aws:MultiFactorAuthPresent": "true"
        },
      }),
      roleName: "admin_role",
    });

    user.addToPolicy(new iam.PolicyStatement({
      resources: [role.roleArn],
      actions: ['sts:AssumeRole'],
    }))

    role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName("AdministratorAccess"))
  }
}
