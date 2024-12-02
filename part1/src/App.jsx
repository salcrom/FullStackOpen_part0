const Header = (prop) => {
    // console.log(prop);
    return <h1>{prop.course}</h1>;
};

const Content = (props) => {
    // console.log(props);
    return (
        <div>
            <Part part={props.part[0]} exercises={props.exercises[0]} />
            <Part part={props.part[1]} exercises={props.exercises[1]} />
            <Part part={props.part[2]} exercises={props.exercises[2]} />
        </div>
    );
};

const Part = (props) => {
    console.log(props);
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    );
};

const Total = (prop) => {
    // console.log(prop);
    return <p>Number of exercises {prop.exercises}</p>;
};

const App = () => {
    const course = "Half Stack application development";
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10,
    };
    const part2 = {
        name: "Using props to pass data",
        exercises2: 7,
    };
    const part3 = {
        name: "State of a component",
        exercises3: 14,
    };

    return (
        <div>
            <Header course={course} />
            <Content
                part={[part1, part2, part3]}
                exercises={[exercises1, exercises2, exercises3]}
            />
            <Total exercises={exercises1 + exercises2 + exercises3} />
        </div>
    );
};

export default App;
