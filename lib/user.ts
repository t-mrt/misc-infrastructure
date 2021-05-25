import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam'

export class UserStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const user = new iam.User(this, 'GeneralPurposeUser', {
      userName: "t_"
    });
    user.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName("AdministratorAccess"))
  }
}
