import * as cdk from "@aws-cdk/core"
import * as iam from "@aws-cdk/aws-iam"
import * as s3 from "@aws-cdk/aws-s3"

export class TrivialBackupStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)
        const user = new iam.User(this, "User", {
            userName: "trivial_backup",
        })

        const bucket = new s3.Bucket(this, "Bucket", {
            versioned: true,
            bucketName: "trivial-backup-02",
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
        })

        bucket.addToResourcePolicy(
            new iam.PolicyStatement({
                actions: ["s3:PutObject"],
                resources: [bucket.arnForObjects("*")],
                principals: [user],
            })
        )
    }
}
