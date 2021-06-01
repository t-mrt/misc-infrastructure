#!/usr/bin/env node
import "source-map-support/register"
import * as cdk from "@aws-cdk/core"
import { UserStack } from "../lib/user"
import { TrivialBackupStack } from "../lib/trivial-backup"
import { DomainStack } from "../lib/domain"

const app = new cdk.App()
new UserStack(app, "MiscInfrastructureStack", {})

new DomainStack(app, "DomainStack", {})

new TrivialBackupStack(app, "TrivialBackupStackStack", {})
