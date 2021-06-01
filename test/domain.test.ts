import * as cdk from "@aws-cdk/core"
import { SynthUtils } from "@aws-cdk/assert"
import * as d from "../lib/domain"

test("snapshot", () => {
    const app = new cdk.App()
    const stack = new d.DomainStack(app, "MyTestStack")
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot()
})
