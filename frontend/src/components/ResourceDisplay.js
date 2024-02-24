function ResourceDisplay({ resources }) {
    return (
      <div>
        <h2>Resources</h2>
        <p>Food: {resources.food}</p>
        <p>Wood: {resources.wood}</p>
        <p>Metal: {resources.metal}</p>
        <p>Research: {resources.research}</p>
      </div>
    );
  }
  
  export default ResourceDisplay;