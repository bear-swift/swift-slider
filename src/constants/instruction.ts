import { IProjectDetail } from "@/types/instruction";

export const INSTRUCTION_LIST: IProjectDetail[] = [
  {
    id: "1",
    projectid: "1",
    steps: [
      {
        title: "Introduction",
        steps: [],
        additionalContent: [
          {
            type: "text",
            content:
              "This project is broken down into sections with each section teaching you an essential coding component. Follow each step in order and add code in the editor from top to bottom.",
          },
          {
            type: "text",
            content:
              "We will be using the Xcode to help us build our app in this project. Xcode is like a special app that helps you create your own apps and games for iPhones, iPads, Macs, and Apple Watches. Imagine you have a big toolbox full of everything you need to build something cool, like a game or an app. Xcode is that toolbox!",
          },

          {
            type: "text",
            content:
              "Remember if you see an error do not panic! Keep coding and the errors will go away as you complete each step. At the end of the project if you have any errors, revisit the section of code again to make sure you followed the instructions and have the code on the correct line, or head to our Community Support Facebook page on the left on the screen to ask a question (or finally you can ask a parent for help!).",
          },
          {
            type: "text",
            content:
              "As you work through your project you will notice this symbol in the code, **//**. This is called a comment. Any words or numbers on the line after these two marks are not included in the code and allow you to add notes directly into your code. This is common practice by coders, so they can remember what each section of code does. Feel free to use this throughout your code to add notes or anything you want to remember!",
          },
        ],
      },
      {
        title: "Concepts Introduced in This Project",
        description: "",
        steps: [],
        additionalContent: [
          {
            type: "text",
            content: "- Sliders",
          },
          {
            type: "text",
            content: "- State Management",
          },
          {
            type: "text",
            content: `- Color Manipulation`,
          },
        ],
      },
      {
        title: "Section 1: Setting Up Our Project",
        steps: [
          {
            title: "Overview",
            elements: [
              {
                type: "text",
                content:
                  "In Section 1, we will be setting up the code for our project!",
              },
            ],
          },
          {
            title: "Step 1: Getting Started",
            elements: [
              {
                type: "text",
                content: `1.Lets find our ColorMixer App on our Desktop so we can launch Xcode. Make sure you have a folder on your desktop called ColorMixerApp and click on it to open it.`,
              },
              {
                type: "image",
                content: "/images/instructions/colormixerdesktop.png",
              },
              {
                type: "text",
                content: `2. Once the folder comes up find the file ColorMixerAppx.xcodeproj(usually the second file in the folder) and click on it`,
              },
              {
                type: "image",
                content: "/images/instructions/colormixerproj.png",
              },
              {
                type: "text",
                content: `3. Once Xcode launches you can ignore the popup just Click Cancel`,
              },
              {
                type: "text",
                content: `4. Make sure you are in the ContentView file which you will find on the left side of the screen. This is where we are going to make our coding changes`,
              },
              {
                type: "image",
                content: "/images/instructions/contentviewfile.png",
              },
              {
                type: "text",
                content: ` **Important Note**: We will be using **line numbers** in our project. Line numbers show up in Xcode on the left side of the coding editor see image below. Please make sure you copy each piece of code to the correct line number.`,
              },
              {
                type: "image",
                content: "/images/instructions/LineNumbersScreenShot.png",
              },
            ],
          },
          {
            title: "Step 2: Adding Our Content View",
            elements: [
              {
                type: "text",
                content:
                  "Once Xcode is opened place your cursor on **line 1** and press enter until you see **line 66** appear. Make sure you are on **line 66**, then copy and paste the code below. You can ignore the errors we will fix it later",
              },
              {
                type: "code",
                content: `}\n     #Preview{\n        ContentView()\n    }`,
                copyRequired: true,
              },
              { type: "image", content: "" },
              {
                type: "text",
                content: "Here is what your sceen should look like in Xcode.",
              },
              {
                type: "image",
                content: "/images/instructions/Section1-Step1.png",
              },
            ],
          },
          {
            title: "Step 3: Line 1 Setup",
            elements: [
              {
                type: "text",
                content:
                  "Go back to the top of the screen and on **line 1**, copy the code below over into XCode",
              },
              {
                type: "code",
                content: `import SwiftUI\nstruct ContentView: View {\n    @State private var red: Double = 0.5\n    @State private var green: Double = 0.5\n    var body: some View {\n        VStack {\n            Text("")\n                .font(.largeTitle)\n                .padding()`,
                copyRequired: true,
              },
            ],
          },
          {
            title: "Step 3: Add Game Title",
            elements: [
              {
                type: "text",
                content: `Find the words **Text(\"\")** on **line 7** and within the quotation mark type the words "Color Mixer". When you are finished **line 7** should now look like this below.`,
              },
              {
                type: "code",
                content: 'Text("Color Mixer")',
              },
            ],
          },
          {
            title: "Step 4: Declare Variable for Blue Color",
            elements: [
              {
                type: "text",
                content: `After ** Line 4 ** press enter to move to ** Line 5 ** so we can  declare a new variable. Make sure you are on ** Line 5 ** and type the words "@State private var blue: Double = 0.5". **Line 5** should now look like this`,
              },
              {
                type: "code",
                content: "@State private var blue: Double = 0.5",
              },
              {
                type: "text",
                content:
                  "Adding this piece of code will help you declare a variable for the color blue that you will use later on in your project. Using **@State annotation** with a **variable** lets SwiftUI know that this variable value will need to be updated within our code. SwiftUI automatically refreshes the **view** to reflect the updated state when it changes.",
              },
            ],
          },
        ],
      },
      {
        title: "Section 2: Add a Rectangle to Display the Color",
        steps: [
          {
            title: "Overview",
            elements: [
              {
                type: "text",
                content:
                  "In this section, you will create a rectangle that will display the color option that you select on the slider.",
              },
            ],
          },
          {
            title: "Step 1: Add Rectangle",
            elements: [
              {
                type: "text",
                content:
                  "Look for the **line 10** and press enter so we can add a new line so we can copy and paste some code to **line 11**.",
              },
              {
                type: "text",
                content:
                  "Make sure now you are on **line 11** and and copy and paste the following code. Dont worry about the errors we will fix them later.",
              },
              {
                type: "code",
                content: `()\n.fill(Color(red: red, green: green, blue: blue))\n.frame()\n.cornerRadius(10)\n.padding()`,
                copyRequired: true,
              },
            ],
          },
          {
            title: "Step 2: Complete Rectangle",
            elements: [
              {
                type: "text",
                content: `In order to create the rectangle, find **line 11** and before the **()** type the word "Rectangle". So now your code on **line 11** should look like`,
              },
              {
                type: "code",
                content: "Rectangle()",
              },
            ],
          },
          {
            title: "Step 3: Determine Size of the Rectangle",
            elements: [
              {
                type: "text",
                content: `Next you need to determine the size of the rectangle. Find **line 13**. Got it? On **line 13**, you will see a **.frame()**. Within the parentheses, type the words: width: 200, height: 200. **Line 13** should now look like this`,
              },
              {
                type: "code",
                content: ".frame(width: 200, height: 200)",
              },
              {
                type: "text",
                content:
                  "If you want your rectangle to be bigger you can increase the number, if you want your rectangle to be smaller you can decrease the number.",
              },
            ],
          },
        ],
      },
      {
        title: "Section 3: Create the Color Sliders",
        steps: [
          {
            title: "Overview",
            elements: [
              {
                type: "text",
                content:
                  "In this section you will create a slider for each of the colors: red, green and blue. The slider will allow the user to select a specific color, as well as mix colors between red, green and blue.",
              },
            ],
          },
          {
            title: "Step 1: Add Slider Code",
            elements: [
              {
                type: "text",
                content:
                  "Find **line 15** and press enter to begin a new line. Lets copy and paste some code starting at **line 16**.",
              },
              {
                type: "text",
                content:
                  " Make sure you are on  **line 16** . Now copy and paste the following code to **line 16**. You should see the Color Mixer App displayed on the right side of your screen in the preview section.",
              },
              {
                type: "code",
                content: `VStack {\n    //SliderView(value: $red, textColor: .red)\n    //SliderView(value: $green, textColor: .green)\n}\n.padding()\n}\n}`,
                copyRequired: true,
              },
            ],
          },
          {
            title: "Step 2: Add Slider for Blue",
            elements: [
              {
                type: "text",
                content:
                  "Look at the **lines 17 and 18**. These two lines will create the sliders for the colors red and green.",
              },
              {
                type: "code",
                content: `VStack {\n    //SliderView(value: $red, textColor: .red)\n    //SliderView(value: $green, textColor: .green)`,
              },
              {
                type: "text",
                content:
                  'Next click on **line 18** and press enter to move to **line 19**. On this line you are going to create a slider for the color blue.  Make sure you are on **line 19** and type the words "//SliderView(value: $blue, textColor: .blue)". **Line 19** should look like this now.',
              },
              {
                type: "code",
                content: "//SliderView(value: $blue, textColor: .blue)",
              },
            ],
          },
        ],
        additionalContent: [
          {
            type: "funFact",
            content: ` Did you notice the difference between our two variables in our SliderView. One as a $ and the other begins with a period.
         So, when you use SliderView(value: $red, textColor: .red), you're telling the SliderView to control the red value with the slider and display any text in red color!`,
          },
        ],
      },
      {
        title: "Section 4: Coding Check-In",
        steps: [
          {
            title: "Step 1: Code Check",
            elements: [
              {
                type: "text",
                content:
                  "For your code, here is what you should have so far! Again if you still have errors, that’s ok! Just make sure to have the key coding components from Section 1-3 in your code!.If you get stuck and still have an error after this step, please visit the **Help Section** on the left side of your screen to reach out to us for support!",
              },
              {
                type: "code",
                content: `import SwiftUI\nstruct ContentView: View {\n    @State private var red: Double = 0.5\n    @State private var green: Double = 0.5\n    @State private var blue: Double = 0.5\n    var body: some View {\n        VStack {\n            Text("Color Mixer")\n                .font(.largeTitle)\n                .padding()\n            Rectangle()\n                .fill(Color(red: red, green: green, blue: blue))\n                .frame(width: 200, height: 200)\n                .cornerRadius(10)\n                .padding()\n            VStack {\n                //SliderView(value: $red, textColor: .red)\n                //SliderView(value: $green, textColor: .green)\n                //SliderView(value: $blue, textColor: .blue)\n            }\n            .padding()\n        }\n    }`,
              },
              {
                type: "text",
                content: "Your code should look like this in Xcode",
              },
              {
                type: "image",
                content: "/images/instructions/checkincolormixer.png",
              },
            ],
          },
        ],
      },
      {
        title: "Section 5: Adding Text to the Color Sliders",
        steps: [
          {
            title: "Overview",
            elements: [
              {
                type: "text",
                content:
                  "In this section, you will add a title to the color sliders with the name of the color and the number value for the color selected.",
              },
            ],
          },
          {
            title: "Step 1: Add SliderView Struct",
            elements: [
              {
                type: "text",
                content: "Copy over the code below to **Line 24**",
              },
              {
                type: "code",
                content: `struct SliderView: View {\n    @Binding var value:\n    var textColor: Color\n    var body: some View {\n        \n            Text("\\(textColor.description.capitalized): \\(Int(value * ))")\n                .foregroundColor(textColor)\n            Slider(value: $value)\n                .accentColor(textColor)\n        }\n        .padding()\n    }\n}`,
                copyRequired: true,
              },
            ],
          },
          {
            title: "Step 2: Add Double Type for Binding Variable",
            elements: [
              {
                type: "text",
                content: `Next, we are going to use a **Binding variable** to hold the slider value. The binding property on a variable is used when you want to pass data from a parent view to a child view and allow the child view to modify that data. On **line 25**, after the words "@Binding var value:" type the word Double. **Line 25** should look like this now`,
              },
              {
                type: "code",
                content: `@Binding var value: Double`,
                copyRequired: true,
              },
            ],
          },
          {
            title: "Step 3: Organize Sliders",
            elements: [
              {
                type: "text",
                content:
                  'Next we need to make sure that the title of the color sliders are organized into a column. In order to do that, on **Line 28**, type the word "VStack {" . Make sure you also include the "{" at the end. ** Line 28 should look like this now**',
              },
              {
                type: "code",
                content: `VStack {`,
              },
            ],
          },
          {
            title: "Step 4: Complete Color Slider",
            elements: [
              {
                type: "text",
                content: `Last you need to finish the line of code for **Line 29** that will assign a value to the different colors on the color slider. On **Line 29** you will see "(value *  ) within the parentheses" and after the "*"" type the number 255. **Line 29 ** should look like this now `,
              },
              {
                type: "code",
                content:
                  'Text("\\(textColor.description.capitalized): \\(Int(value * 255))")',
              },
            ],
          },
        ],
        additionalContent: [
          {
            type: "funFact",
            content:
              "Why the number 255?  Since color values in many contexts are between 0 and 255, this scales the value to that range.",
          },
        ],
      },
      {
        title: "Section 6:Running Our Code",
        steps: [
          {
            title: "Overview",
            elements: [
              {
                type: "text",
                content:
                  "In this section, we will remove comments and run our code.",
              },
            ],
          },
          {
            title: "Step 1: Locate Commented Lines",
            elements: [
              {
                type: "text",
                content:
                  "When you run your code, your project might still be coming up with errors or the app may not be looking like it should—and that’s ok! The last step before the app is done is to go back through and remove any comments we added to our code. This way all of our code will run together and it should get rid of any errors your project has.",
              },
              {
                type: "text",
                content: `Find **lines 17, 18, and 19**. Got it? You will notice each of these lines start with a **//**. This is a comment! Coders use comments to add notes to their code and when we run our app the code on these lines are ignored. Go ahead and delete just the **//** from all three of your lines. All three lines should look like this now`,
              },
            ],
          },
          {
            title: "Step 2: Remove Comments",
            elements: [
              {
                type: "code",
                content: `SliderView(value: $red, textColor: .red)\nSliderView(value: $green, textColor: .green)\nSliderView(value: $blue, textColor: .blue)`,
              },
              {
                type: "text",
                content:
                  "You will also notice that when you remove the comments here your code changes color, this means this line of code is actively running in your program!",
              },
            ],
          },
          {
            title: "Lets do a Small Challenge",
            elements: [
              {
                type: "text",
                content:
                  "Now that we got all of our code and we ran it let’s explore how we can customize our Color Mixer! ",
              },
              {
                type: "text",
                content:
                  "Earlier in the project we added code to create a **Rectangle** that will display to us the colors when we mix them together. What could you change about your code to make this a circle instead? ",
              },
            ],
          },
          {
            title: "Here is a Hint",
            elements: [
              {
                type: "text",
                content: `If stuck, review Section 2 again!`,
              },
            ],
          },
          {
            title: "Second Hint",
            elements: [
              {
                type: "text",
                content: `If still stuck, look at **line 11**`,
              },
            ],
          },
          {
            title: "Here is the Solution to Our Challenge",
            elements: [
              {
                type: "text",
                content:
                  "Below is what your code should now look like on **line 11**",
              },
              {
                type: "code",
                content: "Circle()",
              },
              {
                type: "text",
                content:
                  "Did you notice how the rectangle in our preview section changed to a circle? Run you code again and see if anything changed. The colors should still be similar as when we had our rectangle there",
              },
            ],
          },
        ],
      },
      {
        title: "Section 7: Share With Your Friends",
        steps: [],
      },
    ],
    fullcode: `import SwiftUI
struct ContentView: View {
    @State private var red: Double = 0.5
    @State private var green: Double = 0.5
    @State private var blue: Double = 0.5
    var body: some View {
        VStack {
            Text("Color Mixer")
                .font(.largeTitle)
                .padding()
            Rectangle()
                .fill(Color(red: red, green: green, blue: blue))
                .frame(width: 200, height: 200)
                .cornerRadius(10)
                .padding()
            VStack {
                SliderView(value: $red, textColor: .red)
                SliderView(value: $green, textColor: .green)
                SliderView(value: $blue, textColor: .blue)
            }
            .padding()
        }
    }
}
struct SliderView: View {
    @Binding var value: Double
    var textColor: Color
    var body: some View {
        VStack {
            Text("\\(textColor.description.capitalized): \\(Int(value * 255))")
                .foregroundColor(textColor)
            Slider(value: $value)
                .accentColor(textColor)
        }
        .padding()
    }
}
#Preview{
    ContentView()
}`,
  },
  {
    id: "2",
    projectid: "2",
    steps: [
      {
        title: "Introduction",
        description: "",
        steps: [],
        additionalContent: [
          {
            type: "text",
            content:
              "This project is broken down into sections with each section teaching you an essential coding concept. Follow each step in order and add code in the editor from top to bottom." +
              "Remember if you see an error in your code do not panic! Keep coding and the errors will go away as you complete each step. At the end of the project if you have any errors, please re-read the steps again. If you get stuck visit the help section on the left side of your screen.",
          },
          {
            type: "text",
            content:
              `As you work through your project you will notice this symbol in the code "//" .` +
              "This is called a comment. Any words or numbers on the line after these two marks are not included in the code and allow you to add notes directly into your code. This is common practice by coders, to make the code more understandable for themselves and others who read it. We will use comments in this project to refer to line numbers. Feel free to use this throughout your code to add notes or anything you want to remember!" +
              "Once you’ve completed your project, let us know in Section 8! We’ll be thrilled to help you share your app and get it up and running on your iPhone or iPad. Happy coding! :)",
          },
        ],
      },
      {
        title: "Concepts Introduced in This Project",
        description: "",
        steps: [],
        additionalContent: [
          {
            type: "text",
            content: `- Variables and State`,
          },
          {
            type: "text",
            content: `- User input handling`,
          },
          {
            type: "text",
            content: `- Conditional logic`,
          },
          {
            type: "text",
            content: `- Basic UI layout with SwiftUI`,
          },
        ],
      },
      {
        title: "Section 1: Setting Up the Project",
        description:
          "In Section 1, we will be setting up the code for the project! ",
        steps: [
          {
            title: "Overview",
            elements: [
              {
                type: "text",
                content:
                  "In Section 1, we will be setting up the code for our project!",
              },
            ],
          },

          {
            title: "Step 1: Getting Started",
            elements: [
              {
                type: "text",
                content: `1.Lets find our GuessTheNumber Game on our Desktop so we can launch Xcode. Make sure you have a folder on your desktop called GuessTheNumberGame and click on it to open it.`,
              },
              {
                type: "image",
                content: "/images/instructions/GuessTheNumberDesktop.png",
              },
              {
                type: "text",
                content: `2. Once the folder comes up find the file GuessTheNumberGamexcodeproj and click on it`,
              },
              {
                type: "image",
                content: "/images/instructions/GuessTheNumberFile.png",
              },
              {
                type: "text",
                content: `3. Once Xcode launches you can ignore the popup just Click Cancel`,
              },
              {
                type: "text",
                content: `4. Make sure you are in the ContentView file which you will find on the left side of the screen. This is where we are going to make our coding changes`,
              },
              {
                type: "image",
                content: "/images/instructions/contentviewfile.png",
              },
              {
                type: "text",
                content: ` **Important Note**: We will be using **line numbers** in our project. Line numbers show up in Xcode on the left side of the coding editor see image below. Please make sure you copy each piece of code to the correct line number.`,
              },
              {
                type: "image",
                content: "/images/instructions/LineNumbersScreenShot.png",
              },
            ],
          },

          {
            title: "Step 2: Adding our Content View",
            elements: [
              {
                type: "text",
                content:
                  "Once Xcode is opened place your cursor on **line 1** and press enter until you see **line 66** appear. Make sure you are on **line 66**, then copy and paste the code below. You can ignore the errors we will fix it later",
              },
              {
                type: "code",
                content: `}\n     #Preview{\n        ContentView()\n    }`,
                copyRequired: true,
              },
              {
                type: "text",
                content: "Here is what your sceen should look like in Xcode.",
              },
              {
                type: "image",
                content: "/images/instructions/Section1-Step1.png",
              },
              {
                type: "text",
                content:
                  "In SwiftUI, the **ContentView()** is typically the entry point for your app's user interface.",
              },
            ],
          },
          {
            title: "Step 3: Copy And Paste Our Beginning Block of Code",
            elements: [
              {
                type: "text",
                content: "Copy over the text below to **Line 1** in Xcode.",
              },
              {
                type: "code",
                content: `import SwiftUI\nstruct ContentView: View {\n    @State private var numberToGuess = Int.random(in: 1...5)\n    @State private var userGuess = ""\n\n    var body: some View {\n        VStack(spacing: 20) {\n            Text("")\n                .font(.largeTitle)\n                .padding()`,
                copyRequired: true,
              },
              {
                type: "text",
                content:
                  "The code here sets up the initial **@State variables** and starts building the user interface with a title. As we add our title and buttons to our game it will show up on the right hand side in the Preview Section. If your title and buttons don’t show up right away that’s okay, continue along and you will start to see it come together after Section 3!",
              },
            ],
          },
          {
            title: "Step 4: Creating a Text View",
            elements: [
              {
                type: "text",
                content:
                  'Find Text("") on **line 8** and within the quotation marks type the words  "Guess the Number". The line of code should look like this now',
              },
              { type: "code", content: 'Text("Guess the Number")' },
              {
                type: "text",
                content:
                  "When you are finished **line 8** should now look like this",
              },
              {
                type: "funFact",
                content:
                  "**Parentheses** are very important when it comes to coding! For every open parenthesis you always want a closing parenthesis!",
              },
            ],
          },
          {
            title: "Step 5:  Declare A variable ",
            elements: [
              {
                type: "text",
                content: "Go to **line 4** in Xcode which looks like this",
              },
              {
                type: "code",
                content: ` @State private var userGuess =  ""  `,
              },
              {
                type: "text",
                content: `Now on **line 5** type out the words '@State private var feedback = ""  '. **Line 5** should now look like the code below. Make sure you added the double quotes at the end of your sentence after the equals sign`,
              },
              { type: "code", content: '@State private var feedback = ""' },
              {
                type: "text",
                content:
                  "Adding this piece of code will help you declare a **variable** that you will use later on in your project",
              },
              {
                type: "text",
                content:
                  "Using **@State annotation** with a **variable** lets SwiftUI know that this variable value will need to be updated within our code. SwiftUI automatically refreshes the **view** to reflect the updated state when it changes.",
              },
              {
                type: "text",
                content:
                  "That’s it! Now you’re ready for Section 2, where you will create an input field for the number and a button",
              },
            ],
          },
        ],
        additionalContent: [],
      },
      {
        title: "Section 2: Adding Input Field and Button",
        description:
          "This section of code adds the TextField for user input and a button for submitting the guess.",
        steps: [
          {
            title: "Overview",
            elements: [
              {
                type: "text",
                content:
                  "In this section we will add the **TextField** for user input and a button for submitting the guess",
              },
            ],
          },
          {
            title: "Step 1: Lets copy and paste our button and textfield",
            elements: [
              {
                type: "text",
                content:
                  " Copy and paste the code below to Xcode on  **line 11**.",
              },
              {
                type: "code",
                content: `TextField("Enter your guess", text: $userGuess)\n    .padding()\n    .keyboardType(.numberPad)\n    .border(Color.gray, width: 1)\nButton(action: {\n    \n}) {\n    Text("Submit Guess")\n        .padding()\n        .background()\n        .foregroundColor()\n        .cornerRadius()\n}`,
                copyRequired: true,
              },
              {
                type: "text",
                content:
                  "This code adds an textfild  for the user's guess,  a button, and text for our button .",
              },
            ],
          },
          {
            title: "Step 2: Call checkGuess() Function",
            elements: [
              {
                type: "text",
                content:
                  "What is a function ? A function triggers an action in your code. When you give an input, the function always produces an output. In this game when we click on the button to check if the number is right, it will call the checkGuess() function and the program will check if the number that you guessed is right or wrong.",
              },
              {
                type: "text",
                content: `On **line 16**, type the following words "//checkGuess()" . **Line 16** should now look like this below. Make sure you included the // at the beginning of the words.`,
              },
              { type: "code", content: "//checkGuess()" },
              {
                type: "funFact",
                content:
                  "Adding these two forward slashes in front of the **checkGuess()** function adds a comment to our code. So when we run our program this line will get skipped for now. We will remove the **//** slash part later to make it work.",
              },
            ],
          },
          {
            title: "Step 3: Customize Guess Button",
            elements: [
              {
                type: "text",
                content: `Find **line 20**, you will notice .background(). Within the parentheses (), type the words "Color.blue". If you don’t want the color of your button to be blue, you can type another color like yellow, pink, green, brown etc. Get creative and add your personality to your game!"+
                    "Make sure your code looks like the code below`,
              },
              { type: "code", content: ".background(Color.blue)" },
              {
                type: "text",
                content: `Next find **line 21**, on this line you will notice .foregroundColor(), this will change the color of the text for your button. Within the parentheses (), type of the words ".white". This will make the color of the text of your button white. Again feel free to customize the colors to whatever fits you best!"
                 +"Make sure your code looks like the code below and make sure you didnt forget the "." in front of your word`,
              },
              { type: "code", content: ".foregroundColor(.white)" },
              {
                type: "text",
                content: `Last find **line 22**, on this line you will notice cornerRadius(). Within the parentheses (), type the number "10". This number will change the size of the button. If you want the button bigger, increase the number! If you want the button smaller, decrease the number!`,
              },
              { type: "code", content: ".cornerRadius(10)" },
              {
                type: "text",
                content: "Your final code should look something like this:",
              },
              {
                type: "code",
                content:
                  ".background(Color.blue)\n.foregroundColor(.white)\n.cornerRadius(10)",
              },
              {
                type: "text",
                content:
                  "Now let’s run our code! When you run your code, you should be able to see the Submit Guess button on the preview section of your screen." +
                  "And that’s all for Section 2! In the next section you will create a display message for your game!",
              },
            ],
          },
        ],
        additionalContent: [
          {
            type: "funFact",
            content:
              "It’s always important to re-run your code whenever you add something new or change something, so you can see the effect it will have on your code instantly!",
          },
        ],
      },
      {
        title: "Section 3: Adding Feedback Text",
        description: "",
        steps: [
          {
            title: "Overview",
            elements: [
              {
                type: "text",
                content:
                  "In this section you will set up the feedback text to display a message based on the user's guess. ",
              },
            ],
          },
          {
            title: "Step 1: Copy and paste our code to **line 24**.",
            elements: [
              {
                type: "text",
                content:
                  "Copy and paste the text in XCode after your code in Section 2.",
              },
              {
                type: "code",
                content: `    Text("feedback")`,
                copyRequired: true,
              },
              {
                type: "text",
                content: `On **line 24**, within the parentheses of Text() type the word "feedback" .The line of code should now look like this`,
              },
              {
                type: "code",
                content: `Text("feedback")\n        .padding()\n    }\n    .padding()\n} `,
              },
              {
                type: "text",
                content:
                  "That’s all for Step 3! In the next step, we’ll do a code check to make sure you’re set up for success on the rest of the project! ",
              },
            ],
          },
        ],
        additionalContent: [
          {
            type: "funFact",
            content:
              "It’s always important to re-run your code whenever you add something new or change something, so you can see the effect it will have on your code instantly!",
          },
        ],
      },
      {
        title: "Section 4: Code Check-In",
        description: "",
        steps: [
          {
            title: "Step 1: Lets Verfiy Our Code",
            elements: [
              {
                type: "text",
                content:
                  "For your code, here is what you should have so far! Again if you still have errors, that’s ok! Just make sure to have the key coding components from Section 1-3 are in your code!",
              },
              {
                type: "text",
                content:
                  "If you get stuck and still have an error after this step visit the Help Section on the left to reach out to us.",
              },
              {
                type: "code",
                content: `import SwiftUI\nstruct ContentView: View {\n    @State private var numberToGuess = Int.random(in: 1...5)\n    @State private var userGuess = ""\n    @State private var feedback = ""\n    var body: some View {\n        VStack(spacing: 20) {\n            Text("Guess the Number")\n                .font(.largeTitle)\n                .padding()\n            TextField("Enter your guess", text: $userGuess)\n                .padding()\n            .keyboardType(.numberPad)\n                .border(Color.gray, width: 1)\n            Button(action: {\n                // checkGuess()\n            }) {\n                Text("Submit Guess")\n                    .padding()\n                    .background(Color.blue)\n                    .foregroundColor(.white)\n                    .cornerRadius(5)\n            }\n            Text("feedback")\n                  .padding()\n                   }\n                   .padding()\n               }`,
              },
              {
                type: "text",
                content: "Your code should look like this in Xcode",
              },
              {
                type: "image",
                content: "/images/instructions/Section1-Step4.png",
              },
            ],
          },
        ],
        additionalContent: [],
      },
      {
        title: "Section 5: Creating the Guess Checking Function",
        description: "",
        steps: [
          {
            title: "Overview",
            elements: [
              {
                type: "text",
                content: `In this section, you will add the feedback Text view that will display messages based on the user's guess. 
                    If the number you guess is too low a message will pop up saying it is too low. 
                    If the number you guess is too high, then the message will pop up saying it is too high.
                  If it is correct, then it will display a restart game button so you can try again.`,
              },
            ],
          },
          {
            title: "Step 1: Creating our Function",
            elements: [
              {
                type: "text",
                content:
                  "Copy and paste the code below into Xcode to **line 29** ",
              },
              {
                type: "code",
                content: ` (){\n    guard let guess = Int(userGuess) else {\n        feedback = "Please enter a valid number!"\n        return\n    }\n    < numberToGuess {\n        feedback = "Too low! Try again."\n    } else if guess > numberToGuess {\n        feedback = "Too high! Try again."\n    } else {\n        feedback = \n        resetGame()\n    }\n}`,
                copyRequired: true,
              },
            ],
          },
          {
            title: "Step 2: Lets give our Function A Name",
            elements: [
              {
                type: "text",
                content: `On **line 29** in front of the () type the words "func checkGuess". It should look like this below`,
              },
              {
                type: "code",
                content: "func checkGuess() {",
              },
            ],
          },
          {
            title: "Step 3: Adding the if...else Statement",
            elements: [
              {
                type: "text",
                content:
                  "Next we need to write an **if…else statement**. This way IF the user guesses a number that is lower than the answer then it will display a “Too low! Try again.” message, ELSE it will check if the number is too high or if the number is the correct answer.",
              },
              {
                type: "text",
                content: `On **line 34**,  in front of the "< numberToGuess" type the words out "if guess" `,
              },

              {
                type: "text",
                content: "Your code should now look like this on **line 34**",
              },
              {
                type: "code",
                content: " if guess < numberToGuess {",
              },
            ],
          },
          {
            title: "Step 4: Second if..else statement",
            elements: [
              {
                type: "text",
                content:
                  " By looking at the code we can see there is a second if..else statement on **line 36** that says",
              },
              {
                type: "code",
                content: `else if guess > numberToGuess {\n
                feedback = "Too high! Try again.`,
              },
              {
                type: "text",
                content:
                  " These lines of code will make the “Too high! Try again” message appear if the number the user guesses is too high.",
              },
              {
                type: "text",
                content:
                  "Next we can see the following lines of code, start on **line 35**",
              },
              {
                type: "code",
                content: `else {
            feedback = \n
            resetGame()
`,
              },
              {
                type: "text",
                content: `Lets Finish writing the  last if…else statement. On **line 39** after the word "feedback=" type the words "Congratulations! You guessed it!". `,
              },
              {
                type: "text",
                content:
                  "After this your line of code should look like the code below",
              },
              {
                type: "code",
                content: `feedback = "Congratulations! You guessed it!"`,
              },
              {
                type: "text",
                content:
                  "This will complete our last if…else statement, if the number is guessed correctly by the user then it will display the above message!" +
                  "  " +
                  "You finished Section 5! Next in Section 6 you will add your game reset button!",
              },
            ],
          },
        ],
        additionalContent: [
          {
            type: "funFact",
            content:
              "**If-else statements** are fundamental to programming because they provide a way to control the flow of a program based on specific conditions.",
          },
        ],
      },
      {
        title: "Section 6: Adding the Game Reset Function",
        description: "",
        steps: [
          {
            title: "Overview",
            elements: [
              {
                type: "text",
                content: `In this section you will add a button to reset your game. This way once a user guesses the number correctly, the user can reset the “Guess the Number” answer to a new number and play again. 
`,
              },
            ],
          },
          {
            title: "Step 1: Add resetGame Function",
            elements: [
              {
                type: "text",
                content:
                  "Copy the code below over to Xcode and paste it on **line 43**",
              },
              {
                type: "code",
                content: ` (){\n    numberToGuess = \n    userGuess = \n}`,
                copyRequired: true,
              },
            ],
          },
          {
            title: "Step 2: Naming Our function",
            elements: [
              {
                type: "text",
                content: `On **line 43** in front of the () type the words "func resetGame". Your code should now look like this`,
              },
              {
                type: "code",
                content: ` func resetGame(){`,
              },
            ],
          },
          {
            title: "Step 3: Generate Random Numbers",
            elements: [
              {
                type: "text",
                content: `On **line 44** after "numberToGuess ="  type out the words "Int.random(in: 1...5)". It should now look like this`,
              },
              {
                type: "code",
                content: `numberToGuess = Int.random(in: 1...5)`,
              },
              {
                type: "text",
                content:
                  " Now this variable will get a value between 1 and 5 at random when we reset our game",
              },
            ],
          },
          {
            title: "Lets do a Small Challenge",
            elements: [
              {
                type: "text",
                content:
                  "In your code, change the random number range from 1-5  to 1-10.",
              },
            ],
          },
          {
            title: "Here is a Hint",
            elements: [
              {
                type: "text",
                content: `Refer to the variable "numberToGuess" on **line 3**.`,
              },
            ],
          },
          {
            title: "Here is the Solution to Our Challenge",
            elements: [
              {
                type: "text",
                content:
                  "Below is what your code should now look like on **line 3**",
              },
              {
                type: "code",
                content:
                  "@State private var numberToGuess = Int.random(in: 1...10)",
              },
              {
                type: "text",
                content:
                  "You're done with Section 6! In Section 7, you will add a restart button to your game",
              },
            ],
          },
        ],
        additionalContent: [],
      },
      {
        title: "Section 7: Adding a Restart Button (Optional)",
        description: "",
        steps: [
          {
            title: "Overview",
            elements: [
              {
                type: "text",
                content: `In this section, you will create a restart button so the user can restart your game. 
`,
              },
            ],
          },
          {
            title: "Step 1: Copy and Paste Our Code for Restart Button",
            elements: [
              {
                type: "text",
                content: "Find **line 26** copy the code below over:",
              },
              {
                type: "code",
                content: `(action: {\n    resetGame()\n    feedback = ""\n}){\n    Text("Restart Game")\n        .padding()\n        .background(Color.red)\n        .foregroundColor(.white)\n        .cornerRadius(10)\n}`,
                copyRequired: true,
              },
            ],
          },
          {
            title: "Step 2: Making Our Button",
            elements: [
              {
                type: "text",
                content: `On **line 26** in front of  "(action:" type the word "Button", this will assign the function resetGame() to this button. It should look like this`,
              },
              {
                type: "code",
                content: "Button(action: {\n    resetGame()\n  ",
              },
            ],
          },
          {
            title: "Step 3: Add Text to Button",
            elements: [
              {
                type: "text",
                content:
                  "On **line 30**, in between the two quotation marks type Restart Game. It should now look like this",
              },
              { type: "code", content: `Text("Restart Game")` },
              {
                type: "text",
                content:
                  "You should see your two buttons in the preview section in Xcode" +
                  +"Submit Guess" +
                  "Restart Game",
              },
            ],
          },
          {
            title: "Step 4: Run Your Game",
            elements: [
              {
                type: "text",
                content: `Let's run our game to see what happens. Try to enter in a number between 1- 10 into our text field. As you can see nothing happened. That is because our checkGuess function is still commented out on **line 16**. Let's remove the "//" from the front of the line and now **line 16** should look like this below.`,
              },
              {
                type: "code",
                content: "checkGuess()",
              },
              {
                type: "text",
                content:
                  "Now try running your code again. It shouldn’t have any errors!",
              },
            ],
          },
        ],
      },
      {
        title: "Section 8: Share With Your Friends (Optional)",
        description: "",
        steps: [],
      },
    ],
    fullcode: `import SwiftUI
struct ContentView: View {
    @State private var numberToGuess = Int.random(in: 1...5)
    @State private var userGuess = ""
    @State private var feedback = ""
    var body: some View {
        VStack(spacing: 20) {
            Text("Guess the Number")
                .font(.largeTitle)
                .padding()
            TextField("Enter your guess", text: $userGuess)
                .padding()
            .keyboardType(.numberPad)
                .border(Color.gray, width: 1)
            Button(action: {
                checkGuess()
            }) {
                Text("Submit Guess")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(10)
            }
            Text(feedback)
                .padding()
            Button(action: {
                resetGame()
                feedback = ""
            }){
                Text("Restart Game")
                    .padding()
                    .background(Color.red)
                    .foregroundColor(.white)
                    .cornerRadius(10)
            }
        }
        
        .padding()
    }
    func checkGuess() {
        guard let guess = Int(userGuess) else {
            feedback = "Please enter a valid number!"
            return
        }
        if guess  < numberToGuess {
            feedback = "Too low! Try again."
        } else if guess > numberToGuess {
            feedback = "Too high! Try again."
        } else {
            feedback = "Congratulations! You guessed it!"
            resetGame()
        }
    }
    func resetGame() {
        numberToGuess = Int.random(in: 1...5)
        userGuess = ""
    }
    
}
    
    
    #Preview{
        ContentView()
    }


`,
  },
];
