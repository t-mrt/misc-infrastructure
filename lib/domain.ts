import * as cdk from "@aws-cdk/core"
import * as r from "@aws-cdk/aws-route53"
import * as t from "@aws-cdk/aws-route53-targets"
import * as c from "@aws-cdk/aws-cloudfront"

// TODO: divide stack by hosted zone

export class DomainStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)
        const zone = new r.PublicHostedZone(this, "yux3", {
            zoneName: "yux3.net",
        })
        new r.CnameRecord(this, "blog", {
            zone: zone,
            domainName: "hatenablog.com.",
            recordName: "blog",
        })
        const distribution = c.Distribution.fromDistributionAttributes(this, "ImportedDist", {
            domainName: "d25ymprel65g4i.cloudfront.net",
            distributionId: "E1AB8RFEZ1H7F0",
        })
        new r.ARecord(this, "img", {
            zone: zone,
            target: r.RecordTarget.fromAlias(new t.CloudFrontTarget(distribution)),
            recordName: "img",
        })
    }
}
