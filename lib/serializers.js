export const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),


    exampleUsage: (props) => (

      <pre data-language={props.node.language}>
      <code>{props.node.code}</code>
    </pre>
  
    ),


  }

  
};
