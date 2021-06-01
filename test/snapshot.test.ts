import * as cdk from "@aws-cdk/core"
import { SynthUtils } from "@aws-cdk/assert"
import * as domain from "../lib/domain"
import * as user from "../lib/user"
import * as tb from "../lib/trivial-backup"

describe("snapshot", () => {
    test("domain", () => {
        const app = new cdk.App()
        const stack = new domain.DomainStack(app, "MyTestStack")
        expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot()
    })
    test("user", () => {
        const app = new cdk.App()
        const stack = new user.UserStack(app, "MyTestStack")
        expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot()
    })
    test("trivial-backup", () => {
        const app = new cdk.App()
        const stack = new tb.TrivialBackupStack(app, "MyTestStack")
        expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot()
    })
})
