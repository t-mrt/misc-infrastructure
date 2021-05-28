import * as cdk from "@aws-cdk/core"
import { SynthUtils } from "@aws-cdk/assert"
import * as t from "../lib/trivial-backup"

test("snapshot", () => {
    const app = new cdk.App()
    const stack = new t.TrivialBackupStack(app, "MyTestStack")
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot()
})
