const Header = (prop) => {
    // console.log(prop);
    return <h1>{prop.course}</h1>;
};

const Content = (props) => {
    // console.log(props);
    return (
        <div>
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]} />
            <Part part={props.parts[2]} />
        </div>
    );
};

const Part = (props) => {
    // console.log(props);
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    );
};

const Total = (prop) => {
    // console.log(prop);
    return (
        <p>
            Number of exercises{" "}
            {prop.parts[0].exercises +
                prop.parts[1].exercises +
                prop.parts[2].exercises}
        </p>
    );
};

const App = () => {
    const course = "Half Stack application development";
    const parts = [
        {
            name: "Fundamentals of React",
            exercises: 10,
        },
        {
            name: "Using props to pass data",
            exercises: 7,
        },
        {
            name: "State of a component",
            exercises: 14,
        },
    ];

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    );
};

export default App;
