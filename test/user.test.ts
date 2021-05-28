import { expect as expectCDK, matchTemplate, MatchStyle } from "@aws-cdk/assert"
import * as cdk from "@aws-cdk/core"
import { SynthUtils } from "@aws-cdk/assert"
import * as u from "../lib/user"

test("snapshot", () => {
    const app = new cdk.App()
    const stack = new u.UserStack(app, "MyTestStack")
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot()
})
