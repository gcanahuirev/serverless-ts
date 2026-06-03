set shell := ["bash", "-uc"]

stage := "dev"
service := "sls-ts"

# Deploy the service (dev default)
[group('serverless')]
deploy s=stage:
    sls deploy --stage {{ s }}

# Package the service
[group('serverless')]
pkg s=stage:
    sls package --stage {{ s }}

# View service information
[group('serverless')]
info s=stage:
    sls info --stage {{ s }}

# View logs of a function
[group('serverless')]
logs function s=stage:
    sls logs -f {{ function }} --stage {{ s }} -t

# Run a function locally with an event
[group('serverless')]
invoke-local function s=stage:
    sls invoke local -f {{ function }} --stage {{ s }}

# Remove the service
[group('serverless')]
remove s=stage:
    sls remove --stage {{ s }}

# List the cloudFormation stacks
[group('aws')]
stacks s=stage:
    aws cloudformation list-stacks \
            --query "StackSummaries[?starts_with(StackName, '{{ service }}-{{ s }}')].{Name:StackName,Status:StackStatus}" \
            --output table

# Describe stack resources
[group('aws')]
resources s=stage:
    aws cloudformation describe-stack-resources \
            --stack-name {{ service }}-{{ s }} \
            --query 'StackResources[*].{Type:ResourceType,LogicalID:LogicalResourceId,Status:ResourceStatus}' \
            --output table

# List all lambda functions
[group('aws')]
functions s=stage:
    aws lambda list-functions --output table \
            --query "Functions[?starts_with(FunctionName, '{{ service }}-{{ s }}-')].{Name:FunctionName, Runtime:Runtime, Memory:MemorySize, Timeout:Timeout}" \
            --output table

# Scan the dynamodb table
[group('aws')]
db-scan s=stage:
    aws dynamodb scan \
            --table-name {{ service }}-{{ s }}-character \
            --query "Items[*].{ID:characterId.S,Name:name.S,Url:url.S}" \
            --output table

# View environment variables of a function
[group('aws')]
env function s=stage:
    aws lambda get-function-configuration \
            --function-name {{ service }}-{{ s }}-{{ function }} \
            --query 'Environment.Variables' \
            --output table
