export const serializers = {

  types: {
    list: (props) => {
      const { type } = props;
      const bullet = type == "bullet";
      if (bullet) {
        return <ul>{props.children}</ul>
      }
      return <ol>{props.children}</ol>;
    },
    listItem: (props) => <li>{props.children}</li>,
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    mainImage: props => (
      <figure>
        <img
          src={urlFor(props.node.asset)
            .width(600)
            .url()}
          alt={props.node.alt}
        />

        <figcaption>{props.node.caption}</figcaption>
      </figure>
    ),


    exampleUsage: (props) => (

      <pre data-language={props.node.language}>
      <code>{props.node.code}</code>
    </pre>
  
    ),




  }
  

  
};
