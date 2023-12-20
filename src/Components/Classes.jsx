import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ClassesCard from "./ClassesCard";


const Classes = () => {
    const classes = useLoaderData();
    return (
        <div className="pt-20  bg-black">
            <Helmet>
                <title>Thrive | Classes</title>
            </Helmet>
            <div>
                <h1 className="text-amber-400 text-xl lg:text-4xl md:text-3xl text-center font-bold">Explor Our Fitness Classes</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                {
                    classes.map(classItem => <ClassesCard
                        key={classItem._id}
                        classItem={classItem}
                    ></ClassesCard>)
                }

            </div>
        </div>
    );
};

export default Classes;