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
              `This project is broken down into sections with each section teaching an essential coding component. You will create a simple app where you can mix colors using sliders (Red, Green, and Blue). Each slider will adjust a color channel, and the combined result will be shown in a square. **If you face any issues please ask a parent/guardian for help and they can visit our Help Section for Assistance**.
At the end of the project we will show you how to share your app with your friends and family. **Happy Coding!**.`
          }                  
        ],
      },
      {
        title: "Concepts Introduced in This Project",
        description: "",
        steps: [],
        additionalContent: [
          {
            type: "text",
            content: "**State Management:** The useState hook manages the RGB values (from 0 to 255).",
          },
          {
            type: "text",
            content: "**Color Preview:** A View element is styled with a dynamic backgroundColor, which updates based on the slider values.",
          },
          {
            type: "text",
            content: `**Slider Component:** SliderView is a reusable component that displays a slider for adjusting each color channel (red, green, blue). The Slider component is from the @react-native-community/slider package`,
          },
        ],
      },
      {
        title: "Section 1 Phone And Tablet Setup (Optional)",
        steps: [
          {
            title: "Overview",
            elements: [
              {
                type: "text",
                content:
                 "**You need to have access to a tablet or phone to complete Section 1. If you don’t have access to a tablet or phone, continue onto Section 2**"
              },
            ],
          },
          {
            title: "Step 1: Download And Install the  Expo Go App",
            elements: [
              {
                type: "text",
                content: `**To see your coding changes in real time, you’ll need an app called Expo Go.**
**If you haven’t already, ask an adult to help you download the "Expo Go" app from the App Store or Google Play Store.**
**Make sure you have permission from an adult to use the device for your coding sessions**.`
              },
              {
                type: "image",
                content: "/images/instructions/expogoimage.png",
              }
            ],
          },
          {
            title: "Step 2: Seeing The Changes",
            elements: [
              {
                type: "text",
                content:
                  `**Let's set up our device so we can preview our code changes as we build our app.**
**In the coding platform to the right of your screen click the my device tab.  If you have an Android Device Scan the QR code using the Expo GO App.**
**If you have an IOS Device use the Camera app to scan the QR code. The Expo GO app should launch and you will see a Red popup. Dont worry we will fix this. See the video below if you get stuck.**`
              },
              {
                type: "image",
                content: "",
              },
            ],
          }
        ],
      },
      {
        title: "Section 2: Getting Started With The App",
        steps: [
          {
            title: "Overview",
            elements: [
              {
                type: "text",
                content:
                  "In this section we will write our first code for the color mixer app",
              },
            ],
          },
          {
            title: "Step 1:  What Is App.js ?",
            elements: [
              {
                type: "text",
                content:
                `In a React or React Native project, the app.js file is the main entry point of your application. It includes the main component that will be rendered when the app starts.`
              },
            ],
          },
          {
            title: "Step 2: Finding The App.Js File",
            elements: [
              {
                type: "text",
                content:
                `Find the app.js file on the left hand side. This file is where we will make all of our coding changes.
In the middle of the screen is our coding platform, this is where all of the code lives! As you can see there is already code on our screen! This piece of code sets up the coding platform, and creates the variables that we need for the app. We are defining our main method that is responsible for showing us the app on the screen.`
              },
            ],
          },
          {
            title: "Step 3: What Are Line Numbers?",
            elements: [
              {
                type: "text",
                content:
                `Throughout the project you will see references to Line numbers (ex. “Line 1”). These Line numbers refer to each Line and show up on the left side of the code. Please make sure you copy each piece of code to the correct Line number.`
              },
            ],
          },
          {
            title: "Step 4: Seeing The Changes in Different Views",
            elements: [
              {
                type: "text",
                content:
                `If you did not set up your own device using a phone or a tablet in Section 1, you can see your changes using the Android, IOS or Web Preview. You can select them using the tabs on the far right side of the screen in the coding platform. Feel Free to select the view that you are the most comfortable with.`
              },
            ],
          },
          {
            title: "Step 5: Lets Initialize A Variable",
            elements: [
              {
                type: "text",
                content:
                `On **Line 5**, find the word **TWEEK_ME**. Change **TWEEK_ME** to the number **128*. This initializes our variable to have a value set to 128. The error should be gone and you should see a blank screen after the app loads.`
              },
              {
                type: "text",
                content:
                `After typing the number 128 **Line 5** should look like this`
              },
              {
                type: "code",
                content:
                `const [red, setRed] = useState(128);`
              },
            ],
          },
          {
            title: "Step 6: What Is A Variable And useState?",
            elements: [
              {
                type: "text",
                content:
                  `The code in the previous step defined one of the **variables** for the Color Mixer App. The purpose of the **useState function** is to set the value for the variable. A **variable** is used to hold information so we can reuse it again within the code in many places.  The variables here are red, green, and blue. They are declared as a constant so their values cannot be overwritten.`
              },
            ],
          },
          {
            title: "Step 7: Add Your Name to The App",
            elements: [
              {
                type: "text",
                content:
                  `On **Line 8**, find the word **TWEEK_ME**. Change **TWEEK_ME** to your name inside the  "   ". Make sure you add your name in between the quotes. This will make your name show up on the app, so others know who made it!`
              },
            ],
          },
          {
            title: "Step 8:  Lets Setup the Color Mixer App",
            elements: [
              {
                type: "text",
                content: `Click at the end of **Line 27**  and press enter to create a new line.  You should now be on  **Line 28**. Copy and paste the following code to **Line 28**.
 An error will appear in your code, because SliderView is not defined in the code yet. This will be fixed later on in the code.`,
              },
              {
                type: "code",
                content: `return( \n <View style={styles.container}> \n  <Text style={styles.title}>TWEEK_ME</Text>\n <View \n style={[\n  styles.colorPreview,\n{` +
                "backgroundColor: `rgb(${red}, ${green}, ${blue})`," + `\n  }, \n  ]} /> 
{/* Red Slider */}
<SliderView value={red} onValueChange={setRed} colorName="Red" /> \n {/* Green Slider */} \n\n{/* Blue Slider */} \n<SliderView value={blue} onValueChange={setBlue} colorName="Blue" />
<View style={styles.footerText}>\n <Text style={styles.footerText}>App created by {studentName} on {new Date().toLocaleDateString()}</Text>
</View>
</View>
);`,
copyRequired: true,
              },
              {
                type: "text",
                content: `This section of code gives information to the SliderView the value of the color slider, the updated value when you change it to a different color, and  the label of the color slider.`,
              },
            ],
          },
          {
            title: "Step 9: : Add The Title For Our App",
            elements: [
              {
                type: "text",
                content: `On **Line 30**, find the word **TWEEK_ME**. Change **TWEEK_ME** to the words **Color Mixer**.`,
              },
              {
                type: "text",
                content: `After typing Color Mixer, **Line 30** should look like this`
              },
              {
                type: "code",
                content: "<Text style={styles.title}>Color Mixer</Text>",
              }
            ],
          },
          {
            title: "Step 10: :  Center The Title for The App",
            elements: [
              {
                type: "text",
                content: `On **Line 73**, find the word **TWEEK_ME** . Change the word  **TWEEK_ME** inside the ' '  to the word **center** `,
              },
              {
                type: "text",
                content: `After typing the word **center**, **Line 73** should look like this`
              },
              {
                type: "code",
                content: "alignItems: 'center',",
              },
              
            ],
          },
          
        ],
        
      },
      {
        title: "Section 3: Adding The Sliders",
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
            title: "Step 1: Add the Slider Code",
            elements: [
              {
                type: "text",
                content:
                  `Click on the end of **Line 49** and press enter to move to a new Line. You should now be on **Line 50**.Copy and paste the following code to **Line 50**`,
              },
              {
                type: "code",
                content: `function TWEEK_ME({ value, onValueChange, colorName }) {
   TWEEK_ME (
    <View style={styles.sliderContainer}>
      <Text style={{ color: colorName.toLowerCase() }}>
        {colorName}: {value}
      </Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={255}
        value={value}
        onValueChange={(val) => onValueChange(Math.floor(val))}
        minimumTrackTintColor={colorName.toLowerCase()}
      />
    </View>
  );
}`,
          copyRequired: true,
              },
              {
                type: "text",
                content:
                  `**This set of code contains the information about how the sliders will be displayed on the screen. Like in previous steps an error will show up in the code, but as we continue with our steps it will get resolved.**`,
              },
            ],
          },
          {
            title: "Step 2: Add the Function Name",
            elements: [
              {
                type: "text",
                content:
                  "On **Line 50**, find the word **TWEEK_ME**. Change the word  **TWEEK_ME** to the word **SliderView**",
              },
              {
                type: "text",
                content:
                  'After typing the word SliderView **Line 50** should now look like this ',
              },
              {
                type: "code",
                content: `function SliderView({ value, onValueChange, colorName })`,
              }              
            ],
          },
          {
            title: "Step 3: : Add a Return Method",
            elements: [
              {
                type: "text",
                content: `On **Line 51**,  find the word **TWEEK_ME** . Change the word **TWEEK_ME** to the word **return**`,
              },
              {
                type: "text",
                content: `After typing the word **Return** .**Line 51**, should now look like this`
              },
              {
                type: "code",
                content: `return(`,
              },   
            ],
          },
          {
            title: "Step 3: : What is the return Keyword? ",
            elements: [
              {
              type: "text",
                content:
                  `In **React Native**, the return keyword is used to return JSX, which defines the UI for that component that is displayed on the screen by React Native`
              },        
            ],
          },
        ],
        additionalContent: [
        ],
      },
      {
        title: "Quick-Check In",
        steps: [
          {
            title: "Step 1: Code Check",
            elements: [
              {
                type: "text",
                content:
                  "For the code, here is what you should have so far! Again if you still have errors, that’s ok! Just make sure to have the key coding components from Sections 2-3 in your code!.If you get stuck and still have an error after this step, please visit the **Help Section** on the left side of your screen to reach out to us for support!",
              },
              {
                type: "text",
                content: "Your code should look like this in the Coding Platform",
              },
              {
                type: "image",
                content: "/images/instructions/quickcheckin.png",
              },
            ],
          },
        ],
      },
      {
        title: "Section 4: Building It Out",
        steps: [
          {
            title: "Overview",
            elements: [
              {
                type: "text",
                content:
                  "In this section, you will create a slider and customize some sliders.",
              },
            ],
          },
          {
            title: "Step 1 - Add A Green Slider ",
            elements: [
              {
                type: "text",
                content: "Click on the end of **Line 39**  and press enter to move to a new Line . You should now be  on **Line 40**. Copy and paste the following code to **Line 40**.",
              },
              {
                type: "code",
                content: `<SliderView value={green} onValueChange={Tweek_ME} colorName="Green" />`,
                copyRequired: true,
              },
            ],
          },
          {
            title: "Step 2: Updating The Value For Green Slider When It Changes",
            elements: [
              {
                type: "text",
                content: `On **Line 40**, find the word **TWEEK_ME**. Change the word  **TWEEK_ME** to the word **setGreen**`,
              },
              {
                type: "text",
                content: "After typing the word setGreen **Line 40** should look like this below",
              },
              {
                type: "code",
                content: `<SliderView value={green} onValueChange={setGreen} colorName="Green" />`,
                copyRequired: true,
              },
              {
                type: "text",
                content: "Now when the value is changed on the Slider for green, the setGreen method is called with the updated value. ",
              },
              {
                type: "text",
                content:
                `Congrats on finishing the **Color Mixer App**! Make sure to test out the Color Mixer App to make sure it is working properly.
               If you are stuck or you think you missed something please ask an adult to reach out to us in the help section or view the full code and compare it with yours.`
               
              },
            ],
          },
        ],
        additionalContent: [
        ],
      },
      {
        title: "Section 5: Up For a Challenge?",
        steps: [
          {
            title: "Overview",
            elements: [
              {
                type: "text",
                content:
               "Now lets do a small challenge and customize the app and make it your own!"
               
              },
            ],
          },
          {
            title: "Challenge 1: Change the Title Text",
            elements: [
              {
                type: "text",
                content:
                  `Change the title from **Color Mixer** to something else like **My Color App"** or any fun title you can think of`,
              },
              
            ],
          },
          {
            title: "First Hint",
            elements: [
              {
                type: "text",
                content: `If you are stuck, review Section 2 again where we added our title for the app!`,
              },
            ]
          },
          {
            title: "Second Hint",
            elements: [
              {
                type: "text",
                content: `If still stuck, look at **line 30**`,
              },
            ],
          },
          {
            title: "Here is the Solution to Our Challenge",
            elements: [
              {
                type: "text",
                content:
                  "You can replace the words **Color Mixer** in the code below on **Line 30**with a new title for the app",
              },
              {
                type: "code",
                content: "<Text style={styles.title}>ColorMixer/Text>",
              }
            ],
          },
          {
            title: "Challenge 2: Set New Default Colors For the Colox Mixer Box",
            elements: [
              {
                type: "text",
                content:
                  `Lets change the default color from gray to a fun color like red or any other color.`,
              },    
              
            ],
          },
          {
            title: "First Hint",
            elements: [
              {
                type: "text",
                content: `Modify the initial values for red, green, and blue in the useState hook.`,
              },
            ]
          },
          {
            title: "Second Hint",
            elements: [
              {
                type: "text",
                content: `Look at **Line Numbers 5, 6, and 7**. Try changing the first value to a number between 1-255 and the other two to 0.`,
              },
            ]
          },
          {
            title: "Here is the Solution to Our Challenge",
            elements: [
              {
                type: "text",
                content:
                  "We update **Line 5**  to a number value between 1-255. Start with red and feel free to change to another number",
              },
              {
                type: "code",
                content: `const [red, setRed] = useState(255);  // Start with red at 255 or feel free to use another number
                         const [green, setGreen] = useState(0);
                        const [blue, setBlue] = useState(0);`
              }
            ],
          },
        ],
      },
      {
        title: "Section 6: Sharing The App With Your Friends",
        steps: [],
      },
    ],
    fullcode: `import { View, Text, StyleSheet ,Image,} from 'react-native';` +
`import Slider from '@react-native-community/slider';` +
"import React, { useState, useEffect } from 'react';" + 
`export default function  App() {
  const [red, setRed] = useState(128);
  const [green, setGreen] = useState(128);
  const [blue, setBlue] = useState(128);
  const [studentName, setStudentName] = useState('Myron');
 const [isReady, setIsReady] = useState(false);
 useEffect(() => {
    // Simulate a loading time for the welcome screen
    setTimeout(() => {
      setIsReady(true);
    }, 4000); // Show for 4 seconds
  }, []);
  if (!isReady) {
    return (
      <View style={styles.splashContainer}>
        <Image source={require('./assets/testimage3.png')} style={styles.logo} />
        <Text style={styles.splashText}>Welcome to Color Mixer!</Text>
         <View style={styles.footerText}>
        <Text>Powered by TweekCode</Text>
      </View>
      </View>
    );
  }
  ` +
  `<View style={styles.container}>
      <Text style={styles.title}>Color Mixer</Text>
      <View
        style={[
          styles.colorPreview,
          {
`
  + "backgroundColor: `rgb(${red}, ${green}, ${blue})`,"+
   ` },
        ]}
      />
      {/* Red Slider */}
      <SliderView value={red} onValueChange={setRed} colorName="Red" />    
      {/* Green Slider */}
      <SliderView value={green} onValueChange={setGreen} colorName="Green" />  
      {/* Blue Slider */}
      <SliderView value={blue} onValueChange={setBlue} colorName="Blue" />
      <View>
        <Text style={styles.footerText}>App created by {studentName} on {new Date().toLocaleDateString()}</Text>
      </View>
    </View>
    
}
function SliderView({ value, onValueChange, colorName }) {
  return (
    <View style={styles.sliderContainer}>
      <Text style={{ color: colorName.toLowerCase() }}>
        {colorName}: {value}
      </Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={255}
        value={value}
        onValueChange={(val) => onValueChange(Math.floor(val))}
        minimumTrackTintColor={colorName.toLowerCase()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
splashContainer: {
    flex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeee4', // Your branded color
  },
  logo: {
    width: 200,
    height: 150,
  },
  splashText: {
    fontSize: 24,
    color: '#000000',
     marginTop: 20,
  },
    footerText: {
    color: '#000000',
    fontSize: 14,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7b868',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
    colorPreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  sliderContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
});
`     
    

,
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
