import React from 'react'



const ArmorEReactGuide = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1>Armor-E React</h1>

      <h2>Summary</h2>
      <p>
        Armor-E React is a React component library for everything authentication. 
      </p>

      <h2>Creating a package</h2>
      <p>Create a template for your authentication form if it does not already exist.</p>

      <h3>Template structure:</h3>
      <pre>
        <code>
{`template-name
  ├── components
  │   ├── Component1
  │   │   └── Component1.tsx
  │   ├── Component2
  │   │   └── Component2.tsx
  │   └── Component3 (this component is a container for the other two sub-components)
  │       └── Component3.tsx
  ├── index.ts (exports all components)
  ├── styles.css (should be empty)
  └── stories (empty directory)`}
        </code>
      </pre>

      <p>Create a directory in packages with the name [type]-style[number]. For example, <code>signup-style3</code>.</p>

      <p>Copy the project structure and files exactly from templates.</p>

      <p>Rename component names to include identifier for this specific package (e.g., <code>username -- username-style3</code>).</p>

      <p>Add a <code>package.json</code> to the root directory of the package with <code>react</code> and <code>react-dom</code> as peerDependencies.</p>

      <pre>
        <code>
{`cd into package directory in terminal
run the command "npm init -y"
copy and paste this object into package.json:
"peerDependencies": { "react": "^18.3.1", "react-dom": "^18.3.1" }`}
        </code>
      </pre>

      <p>Add a <code>stories</code> directory to the root directory and create stories for the components as needed.</p>
      <p>Look in <code>packages/examples-style1</code> to see how to create stories. Run the command <code>npm run storybook</code> to view all stories.</p>

      <p>Create test files as needed.</p>
      <p>Modify the components and <code>styles.css</code> as needed.</p>
    </div>
  );
};

export default ArmorEReactGuide;