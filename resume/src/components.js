function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  function People() {
    return (
      <div>
        <Welcome name="Keerthi" />
        <Welcome name="Kartik" />
        <Welcome name="Narmadha" />
      </div>
    );
  }
  export default People;