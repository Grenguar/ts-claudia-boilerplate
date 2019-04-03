# ts-claudia-boilerplate
This is a boilerplate project to use Typescript with AWS Lambda. For deployment, Claudia JS is used here.

You need to have AWS CLI installed in your OS. 

All the necessary scripts have been made for you.

For the first time you should run this command.

```tsc && claudia create --api-module bin/app --region```

After that you can use scripts from package.json: 

```tsc && claudia update --api-module bin/app```

```tsc && claudia create --api-module bin/app```

```tsc && claudia pack --api-module bin/app --force```

Installation guide for AWS CLI can be found [here](https://docs.amazonaws.cn/en_us/cli/latest/userguide/install-windows.html).

Check great documentation on Claudia [here](https://claudiajs.com/claudia-api-builder.html).

Inspired by the article: [check it!](https://medium.com/@zahreva/typescript-with-claudia-js-dc4d16acc948)
