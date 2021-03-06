import React, { Component } from "react";
import Plot from "react-plotly.js";

export default class Lines extends Component {
  // Set up state for loading data
  constructor(props) {
    super();
    this.state = { data: [] };
  }

  // API call upon component mount
  componentDidMount() {
    const endpoint = "https://data.cityofnewyork.us/resource/rc75-m7u3.json";

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
      });
  }

  // Extract and transform data needed for plotting
  addTraces(data) {
    let traces = [];

    let dates = [];
    let lines = {
      Blue_Count: { y: [] },
      Red_Count: { y: [] },
      Green_Count: { y: [] },
    };

    // Group counts over time by individual entity
    data.map((each) => {
      dates.push(each.date_of_interest);

      lines.Blue_Count.y.push(each.case_count);
      lines.Red_Count.y.push(each.death_count);
      lines.Green_Count.y.push(each.hospitalized_count);
    });

    console.log(lines);

    // Set up traces for each entity
    for (const [key, value] of Object.entries(lines)) {
      traces.push({
        type: "scatter",
        mode: "lines",
        x: dates,
        y: value.y,
        name: key,
      });
    }

    return traces;
  }

  render() {
    return (
      <div>
        <Plot
          data={this.addTraces(this.state.data)}
          layout={{ width: 500, height: 300, title: "" }}
        />
      </div>
    );
  }
}
