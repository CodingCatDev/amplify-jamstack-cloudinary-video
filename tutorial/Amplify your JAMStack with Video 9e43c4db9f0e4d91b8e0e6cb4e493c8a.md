# Amplify your Jamstack with Video

Tags: AWS, Amplify, Cloudinary, Video

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Amplify_with_Cloudinary.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Amplify_with_Cloudinary.png)

## Demo

You can find the demo here [https://amplify-cloudinary.codingcat.dev](https://amplify-cloudinary.codingcat.dev)

AWS Amplify

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Screen_Shot_2020-11-04_at_1.54.33_PM.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Screen_Shot_2020-11-04_at_1.54.33_PM.png)

[https://aws.amazon.com/amplify/getting-started/?nc=sn&loc=4](https://aws.amazon.com/amplify/getting-started/?nc=sn&loc=4)

Have you been considering using Amplify, but you're wondering how it will fit into your Jamstack Journey? Let's start off with what Amplify is described as from AWS:

> AWS Amplify is a set of products and tools that enables mobile and front-end web developers to build and deploy secure, scalable full stack applications, powered by AWS. With Amplify, you can configure app backends in minutes, connect them to your app in just a few lines of code, and deploy static web apps in three steps. Get to market faster with AWS Amplify.

AWS Amplify is a great tool for anyone getting started with a new web or mobile project. I am going to focus mainly on the web side in this post. What AWS Amplify does well for developers is provide you with a great platform so you can start building very quickly. One of the common complaints is that it doesn't make some of the things that should be easy, well easy. Historically, when people start creating websites they will always use images and videos. This can be a pain for developers to developers because immediately you will have to start concerning yourself with performance. Yes AWS Amplify makes it very easy to load these things to an S3 bucket but from there it takes a lot more work and also costs start to add up quickly. They are continuing to improve methods for both as I showed with my post on [AWS Amplify Video](https://codingcat.dev/tutorials/aws-amplify-video/). 

## Cloudinary

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled.png)

[https://cloudinary.com/solutions/video_management](https://cloudinary.com/solutions/video_management)

> Developers and marketers use Cloudinary to quickly and easily create, manage and deliver their digital experiences across any browser, device and bandwidth.

Cloudinary is known for easy media uploads and on the fly image and video transformations. This allows developers to worry less about all of the infrastructure that has to be maintained for creating great pipelines for these videos. They also provide a number of software development Kits (SDK) for all of popular platforms right now.

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%201.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%201.png)

## Building a Demo App

I am going to use the React SDK and show you how you can create a great little blogging system using the Amplify for hosting the app and Cloudinary for transforming videos.

If you want to skip all the steps feel free to visit [https://github.com/CodingCatDev/amplify-jamstack-cloudinary-video.git](https://github.com/CodingCatDev/amplify-jamstack-cloudinary-video.git)

### Create a React Application

If you have never setup Amplify you will need an AWS account, and the below links are a great guide for your very first setup.

- [https://docs.amplify.aws/](https://docs.amplify.aws/) - Docs
- [https://docs.amplify.aws/start/q/integration/react](https://docs.amplify.aws/start/q/integration/react) - React Getting Started

Add amplify to your terminal using the following command.

```bash
npm install -g @aws-amplify/cli
```

Then you will need to configure our new project.

```bash
amplify configure
```

Once these steps have been completed you can now create a new [CRA](https://reactjs.org/docs/create-a-new-react-app.html) React Application. This doesn't have anything to do with Amplify just yet, it is a basic starting point for the application. 

```bash
npx create-react-app amplify-jamstack-cloudinary-video
```

It will take a minute for this to finish but you should see a message like below.

```
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd amplify-jamstack-cloudinary-video
  yarn start
```

Now you can enter that directory and start the React application.

```bash
cd amplify-jamstack-cloudinary-video
```

If you would like to see the sample running you can now run the local server by running the below command.

```bash
npm start
```

When you are successful you will see that beautiful rotating React icon.

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%202.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%202.png)

### Adding AWS Amplify

> If you are having any issues with connecting to the correct instance make sure you check in `~/.aws` this will have your credentials listed.
Also you can check [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html) for more details.

Now we can turn our regular React Application into an AWS Amplify Application. This starts preparing your AWS account with the needed connections to your application.

```bash
amplify init
```

> A Note here if you hit enter and nothing is happening make sure you exited your local server from running by hitting `ctrl+c`

Please walk through and select all of the defaults that are provided by simply hitting enter, below are my results

```
? Enter a name for the project amplifyjamstackcloud
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
Using default provider  awscloudformation
```

Now select Yes, when asked if you would like to use a profile. If this is your first time you will most likely just have a default configuration/credential. However, if you do work for anything else AWS related using the AWS SDK you might have one already. So be very careful on which account (profile) you are using.

```
? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use (Use arrow keys)
❯ default
```

You will see a new message appear explaining that a "AWS Amplify Console app" is being added. This happens really fast so you might miss it! You may also find that you're wondering "what in the world just happened?". 

```
Adding backend environment dev to AWS Amplify Console app: d2hxdxps86f74m
```

This is one of the downsides (or upsides) of using AWS Amplify. It makes creating applications very simple, which is great by hiding a lot of the details. However, if you are detail oriented like a lot of us, it can be frustrating. So what just happened here is that up in AWS a new app was created. Now if you navigate to [https://console.aws.amazon.com](https://console.aws.amazon.com)  you can go to the AWS Amplify service.

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%203.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%203.png)

You should see your new application amplifyjamstackcloud (if you named it the same)

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%204.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%204.png)

If you are not finding your app, it might be because you are in the wrong region. Make sure to set the correct one by using the drop down in the upper left.

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%205.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%205.png)

Now that your app is up in the cloud, if you look in General you will see that this application has that original name of `d2hxdxps86f74m` just like we saw in our console. Another thing to take a look at is your backend of `dev` that we added as well, see below where that is located as it will become more important as we continue. 

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%206.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%206.png)

The backend for `dev` is relatively empty at this time but you will notice that AWS Amplify is using [CloudFormation](https://aws.amazon.com/cloudformation/) under the hood. This is what is known as backend as code (BaC). I won't go into great detail what that means, so we can get onto the fun part 😸

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%207.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%207.png)

### Setting up the Frontend

There are some really useful tools libraries for using AWS Amplify and React. We are going to install two of those using the below command.

```
npm install aws-amplify @aws-amplify/ui-react
```

The `aws-amplify` package is the main library for working with Amplify in your apps. The `@aws-amplify/ui-react` package includes React specific UI components.

The next thing we need to do is tell React to import Amplify and configure it using the configuration that was created from using Amplify's CLI tool which is located in `./aws-exports`.

```jsx
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
```

That's it now your app is ready to call Amplify (and inherently the AWS SDK).

### Adding our Data Layer

We are going to utilize GraphQL as our database layer, if you feel more comfortable using the REST API feel free. I tend to use GraphQL because of the realtime notifications.

```bash
amplify add api
```

You can add all of the following information when prompted. If you know you are going to take this demo further you might want to choose multiple objects, however, for this simple setup, we are just going to pick single object.

```
? Please select from one of the below mentioned services: GraphQL
? Provide API name: amplifyjamstackcloud
? Choose the default authorization type for the API API key
? Enter a description for the API key: sample
? After how many days from now the API key should expire (1-365): 365
? Do you want to configure advanced settings for the GraphQL API No, I am done.
? Do you have an annotated GraphQL schema? No
? Choose a schema template: Single object with fields (e.g., “Todo” with ID, nam
e, description)
```

When prompted "Do you want to edit the schema now? (y/n)" you can select yes...just be warned that this will open your default editor for the single file. I prefer to look at the project in its entirety so I choose no and instead run the below command, opening everything in VSCode.

```
code . 
```

There are a lot of files/directories starting to stack up in our project. Everything for our backend that we are creating will be located in the `amplify` directory. In order to find your newly created schema, look in `amplify/backend/api/amplifyjamstackcloud/schema.graphql` . Here you should see the below schema.

```graphql
type Todo @model {
  id: ID!
  name: String!
  description: String
}
```

We are going to only make one small tweak with this model and rename it Videos.

```graphql
type Video @model {
  id: ID!
  name: String!
  description: String
}
```

Now we can "push" this up to the AWS Cloud. There are many things that happen during this process, many of which you will find in the `amplify/backend/api/amplifyjamstackcloud/build` directory. Please feel to reach out to me at [https://codingcat.dev](https://codingcat.dev) if you have more questions about what is happening.

Execute the command below.

```bash
amplify push
```

Answer the questions with all of the defaults like below.

```
alexs-mbp-2:amplify-jamstack-cloudinary-video ajonp$ amplify push
✔ Successfully pulled backend environment dev from the cloud.

Current Environment: dev

| Category | Resource name        | Operation | Provider plugin   |
| -------- | -------------------- | --------- | ----------------- |
| Api      | amplifyjamstackcloud | Create    | awscloudformation |
? Are you sure you want to continue? Yes

The following types do not have '@auth' enabled. Consider using @auth with @model
         - Videos
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/directives#auth

GraphQL schema compiled successfully.

Edit your schema at /Users/ajonp/web/amplify-jamstack-cloudinary-video/amplify/backend/api/amplifyjamstackcloud/schema.graphql or place .graphql files in a directory at /Users/ajonp/web/amplify-jamstack-cloudinary-video/amplify/backend/api/amplifyjamstackcloud/schema
? Do you want to generate code for your newly created GraphQL API Yes
? Choose the code generation language target javascript
? Enter the file name pattern of graphql queries, mutations and subscriptions src/graphql/**/*.js

? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscri
ptions Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested] 2
⠼ Updating resources in the cloud. This may take a few minutes...
```

This could take some time as the AWS Amplify CLI is now creating the correct CloudFormation and executing it within the cloud. When this process completes you should see it output both your GraphQL endpoint and Key.

```
GraphQL endpoint: https://<example>.appsync-api.us-east-1.amazonaws.com/graphql
GraphQL API KEY: <example>
```

Don't worry if you lose this,  it will be stored in `src/aws-exports.js` so that your React application can use it to connect.

### Connect frontend to API

Now that we have a very simple initial setup we can start to create a simple application, if you have followed the [Amplify Getting Started](https://docs.amplify.aws/start/getting-started/data-model/q/integration/react#deploying-the-api), this should be very similar. Now run the below command to get react running in your browser.

```html
npm run start
```

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%208.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%208.png)

If you add a name and description you should see it added below in the form. If you are like me and you want to see the DynamoDB data to make sure this isn't some trick, and, we are storing locally, go to this link [https://console.aws.amazon.com/dynamodb/home](https://console.aws.amazon.com/dynamodb/home) ( you may need to login ).

 

> If you are not seeing any tables, be sure to switch the region.

Below you should see your table, then click on that table to show our video name and description.

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%209.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%209.png)

## Video Upload

> If you are looking to use Video On Demand or streaming please see this tutorial [https://codingcat.dev/tutorials/aws-amplify-video/](https://codingcat.dev/tutorials/aws-amplify-video/)

For this example you are going to use [Cloudinary's Upload Widget](https://cloudinary.com/documentation/upload_widget) to allow for uploading of our video. There are two main cases for uploading videos to Cloudinary `unsigned` and `signed`. So that we can checkout using some additional features of AWS Amplify, we will use the `signed` version for our uploads. This will require some additional work but it will secure your Cloudinary account further. I will also add this is not the only way of doing uploads, you could also use AWS Amplify's built-in S3 upload and trigger a lambda to upload the file [from the S3 bucket](https://cloudinary.com/documentation/upload_images#file_source_options). For this example, we are going to skip using S3 all together.

### Cloudinary Setup

You will need to add an upload preset in Cloudinary. To do this, you click the gear Icon within your console, then select the Upload tab, the address should be similar to this `https://cloudinary.com/console/<your console>/settings/upload`

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2010.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2010.png)

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2011.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2011.png)

Scroll into view (or search for) Upload presets: and select `Add Upload preset`. On this screen provide a folder and select `Signed` for Signing mode.

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2012.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2012.png)

Once you save this please take note that you will need this and your `Cloud name` from the dashboard.

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2013.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2013.png)

### Adding Upload Code

First add the [Cloudinary's Upload Widget](https://cloudinary.com/documentation/upload_widget), by including the script in your `public/index.html` file within the header section

```html
<script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>
```

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2014.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2014.png)

Once this is complete you will also need to include the variable for our upload widget.

> Make sure to update `my_cloud_name` and `my_preset`. Or you will get errors in the console.

```jsx
const uploadWidget = window.cloudinary.createUploadWidget({
    cloudName: 'my_cloud_name', 
    uploadPreset: 'my_preset'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
      }
    }
  );
```

A Button for opening the widget, feel free to add this anywhere but I would recommend above the submit button.

```jsx
<button style={styles.button} onClick={addVideo}>Create Video</button>
```

The function for triggering the widget to open.

```jsx
const showWidget = (uploadWidget) => {
    uploadWidget.open();
  }
```

At this point you can select the upload button but you might find this error `Upload preset must be whitelisted for unsigned uploads`. This is because you still need to sign this upload so that it is more secure.

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2015.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2015.png)

### Creating a Lambda for signing

In order to get a signature from Cloudinary we need to create an API call that will allow us to return the request. We can do this using AWS Amplify and a Lambda datasource.

First you will create a new function by running the below command

```bash
amplify add function
```

Use the below parameters
`Lambda function (serverless function)`

`cloudinarysignature`

`cloudinarysignature`

`NodeJS`

`Hello World`

Then no for everything else

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2016.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2016.png)

Now even though we ran this with Amplify we have not yet connected it to our AppSync API so we cannot call it. We will add that functionality by adding the line below to  `amplify/backend/api/amplifyjamstackcloud/schema.graphql`

```graphql
type Query {
  cloudinarysignature(msg: String): String @function(name: "cloudinarysignature-${env}")
}
```

> Please take not the ${env} here allows for our `dev` environment to be used, this helps later if you ever want to use a `stage` or `prod` environment for testing.

Now to load all of this to AWS aka the cloud. To do that, run the below command.

```bash
amplify push
```

This will give you a screen showing your new function to be created and GraphQL to be updated.

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2017.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2017.png)

Select Yes on all the prompts. Now go grab a ☕️because this is going to take a few minutes.

> Pro Tip: `amplify push --y` will skip all the questions in the future, this gets old quick.

Also if you are super curious about what is happening like me, take a look at the AWS console, and head into CloudFormation you will find your Stack that just ran with all the resources.

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2018.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2018.png)

For a lighter version of this you can also go to amplify select your project → backend → dev. When I was first getting started I liked doing everything through the Amplify dashboard so I could keep it together in my head more.

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2019.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2019.png)

### Testing new function

When your `amplify push` finished you should have received a message with your GraphQL and API key. This also means that your code was updated locally including your GraphQL definitions. In `src/graphql/queries.js` you will find a new query called `cloudinarysignature` we can use this to call our Lambda through AppSync. Add the below to your `App.js`.

```jsx
// eslint-disable-next-line no-unused-vars
async function fetchCloudinarySignature(cb, params) {
  try {
    const cSign = await API.graphql(graphqlOperation(cloudinarysignature, { msg: JSON.stringify(params) }));
    const data = JSON.parse(cSign.data.cloudinarysignature);
    console.log(`Uploading using key ${data.body}`);
    return data.body;
  } catch (err) {
    console.log("error fetching signature");
  }
}
```

Then update `showWidget` to call this post before opening our dialog. You could put this anywhere but I thought this would be easy.

```jsx
const showWidget = () => {
    fetchCloudinarySignature();
    uploadWidget.open();
  }
```

This will call our GraphQL endpoint and return our "Hello from Lambda!" response.

```json
{"data":{"cloudinarysignature":"{statusCode=200, body=\"Hello from Lambda!\"}"}}
```

### Update Function to call Cloudinary

> Any confusion consult [https://cloudinary.com/documentation/node_integration#overview](https://cloudinary.com/documentation/node_integration#overview)

Now that you know our simple example works, we will update the lambda to call Cloudinary. First we need to add the Cloudinary SDK, by running the below command in this directory `amplify/backend/function/cloudinarysignature/src`. Small tip: if you are using VSCode you can do this to open terminal directly to that folder

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2020.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2020.png)

```bash
npm install cloudinary
```

Update the following code in `amplify/backend/function/cloudinarysignature/src/index.js`

```jsx
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const cloudinary = require("cloudinary").v2;

exports.handler = async (event) => {
  console.log(event);
  
  const secret = process.env.CLOUDINARY_API_SECRET;
  const response = {
    statusCode: 400,
    body: `Missing CLOUDINARY_API_SECRET`,
  };
  if (!secret) {
    return response;
  }

  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = await cloudinary.utils.api_sign_request(
    JSON.parse(event.arguments.msg),
    secret
  );

  response.body = signature;
  return JSON.stringify(response);
};
```

Now if you push the Upload button you should see this message, saying that your Cloudinary key is missing

```jsx
{"data":{"cloudinarysignature":"{statusCode=400, body=Missing CLOUDINARY_API_SECRET}"}}
```

Go back to your Cloudinary Dashboard and grab your key, then open the AWS Console and navigate to [Lambda > Functions](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions). Find the `cloudinarysignature-dev` function in the list and click on it.  Scroll down to the Environment Variables and click edit

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2021.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2021.png)

Add your API Key, secret and name.

> **NEVER GIVE YOUR API TO ANYONE OR PUT IN YOUR REPO!**

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2022.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2022.png)

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2023.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2023.png)

Now if you go back to your React app once again [`http://localhost:3000/`](http://localhost:3000/) you can click Upload Video once again and your secret key will be returned.

### Update App.js for Secret

Now that we can see the key coming back and working we will just use this call within our `creatUploadWidget` function request. Below is the full `App.js`

```jsx
/* src/App.js */
import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createVideo } from "./graphql/mutations";
import { listVideos, cloudinarysignature } from "./graphql/queries";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = {
  name: "",
  description: "",
  cloudinary: null,
};

// eslint-disable-next-line no-unused-vars
async function fetchCloudinarySignature(cb, params) {
  try {
    const cSign = await API.graphql(
      graphqlOperation(cloudinarysignature, { msg: JSON.stringify(params) })
    );
    const data = JSON.parse(cSign.data.cloudinarysignature);
    console.log(`Uploading using key ${data.body}`);
    return data.body;
  } catch (err) {
    console.log("error fetching signature");
  }
}

const App = () => {
  const [formState, setFormState] = useState(initialState);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  const uploadWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "ajonp",
      uploadPreset: "dxf42z9k",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the video info: ", result.info);
        setInput("cloudinary", JSON.stringify(result.info));
      }
      if (error) {
        console.log(error);
      }
    }
  );
  const showWidget = () => {
    uploadWidget.open();
  };

  async function fetchVideos() {
    try {
      const videoData = await API.graphql(graphqlOperation(listVideos));
      const videos = videoData.data.listVideos.items;
      videos.map((video) => {
        video.cloudinary = JSON.parse(video.cloudinary);
      });
      setVideos(videos);
    } catch (err) {
      console.log("error fetching videos");
    }
  }

  async function addVideo() {
    try {
      if (!formState.name || !formState.description) return;
      const video = { ...formState };
      setVideos([...videos, video]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createVideo, { input: video }));
    } catch (err) {
      console.log("error creating video:", err);
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Videos</h2>
      <button
        style={styles.uploadButton}
        className="cloudinary-button"
        onClick={showWidget}
      >
        Upload Video
      </button>
      <input
        onChange={(event) => setInput("name", event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
        required
      />
      <input
        onChange={(event) => setInput("description", event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />

      <button style={styles.button} onClick={addVideo}>
        Add Video to List
      </button>
      {videos.map((video, index) => (
        <div key={video.id ? video.id : index} style={styles.video}>
          <p style={styles.videoName}>{video.name}</p>
          <p style={styles.videoDescription}>{video.description}</p>
          <div style={styles.vids}>
            <video controls muted width="320" height="240">
              <source
                src={video.cloudinary.secure_url}
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  vids: {
    maxWidth: "800px",
  },
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  video: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  videoName: { fontSize: 20, fontWeight: "bold" },
  videoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
  uploadButton: { margin: "22px" },
};

export default App;
```

Make sure to update your GraphQL as well by adding cloudinary JSON

```graphql
type Video @model {
  id: ID!
  name: String!
  description: String
  cloudinary: AWSJSON
}
type Query {
  cloudinarysignature(msg: String): String @function(name: "cloudinarysignature-${env}")
}
```

## Publish to Amplify Web Hosting

This is probably the easiest part. First build your app

```bash
npm run build
```

Then you just need to add hosting

```bash
amplify add hosting
```

Select Hosting with Amplify, Manual

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2024.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2024.png)

Now you just need to push up to the web

```bash
amplify publish
```

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2025.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2025.png)

![Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2026.png](Amplify%20your%20Jamstack%20with%20Video%209e43c4db9f0e4d91b8e0e6cb4e493c8a/Untitled%2026.png)

That link at the bottom is your new app, you can also place a custom domain over it.

[https://dev.d2hxdxps86f74m.amplifyapp.com/](https://dev.d2hxdxps86f74m.amplifyapp.com/)

## Extra Credit

- If you want to show off the actual video you can probably add the Cloudinary JS loader, I could not get this to work though.
- I would add authentication and only allow people you want to actually push these items.
- Perhaps try and remove the Cloudinary uploader and just load to S3 and then use the Cloudinary SDK from a Lambda trigger to make these updates
- Use a subscription to update the list anytime someone updates so you get that real time feel.