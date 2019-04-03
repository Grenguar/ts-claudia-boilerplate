# ts-claudia-boilerplate
This is a boilerplate project to use Typescript with AWS Lambda. For deployment, Claudia JS is used here.

You need to have AWS CLI installed in your OS. 

All the necessary scripts have been made.

For the first time you should run this command.
```tsc && claudia create --api-module bin/app --region```

After that you can use scripts from package.json: 
```tsc && claudia update --api-module bin/app```

```tsc && claudia create --api-module bin/app```

```tsc && claudia pack --api-module bin/app --force```
