import { Head, usePage } from "@inertiajs/react";
import React from "react";
import Drawer from "@/Components/Drawer";
import Navbar from "@/Components/Navbar";
import { Employee } from "@/types/models/employee";

export default function EmployeesLaoyout() {
    const { employees } = usePage<{ employees: Array<Employee> }>().props;
    return (
        <React.Fragment>
            <Head>
                <title>Employees</title>
            </Head>
            <Drawer current="Employees">
                <Navbar />
                <section className="w-full h-[90vh] bg-gray-200">
                    <div className="w-full h-20 bg-white flex justify-between items-center px-10">
                        <h1 className="text-2xl font-bold">Employees</h1>
                        <button className="bg-blue-500 text-white px-5 py-2 rounded-md">
                            Add Employee
                        </button>
                    </div>
                    <div className="w-full h-full bg-white p-10">
                        <table className="w-full table table-fixed">
                            <thead>
                                <tr className="bg-primary divide-x-2 text-gray-50 text-sm">
                                    <th className="text-left">Employee ID</th>
                                    <th className="text-left">Avater</th>
                                    <th className="text-left">Full Name</th>
                                    <th className="text-left">Email</th>
                                    <th className="text-left">Phone</th>
                                    <th className="text-left">Role</th>
                                    <th className="text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map(
                                    (employee: Employee, index: number) => (
                                        <tr
                                            key={index}
                                            className="odd:bg-secondary hover:bg-gray-200 transition-colors duration-300 ease-in-out"
                                        >
                                            <td>{employee.id}</td>
                                            <td>
                                                <div className="h-fit w-auto py-1">
                                                    <img
                                                        src={`images/${employee.image}`}
                                                        alt={
                                                            employee.first_name
                                                        }
                                                        className=" h-20 object-scale-down object-center rounded-xl"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                {employee.last_name +
                                                    ", " +
                                                    employee.first_name}
                                            </td>
                                            <td>{employee.email}</td>
                                            <td>{employee.phone}</td>
                                            <td>{employee.role}</td>
                                            <td>
                                                <button className="bg-blue-500 text-white px-5 py-2 rounded-md">
                                                    Edit
                                                </button>
                                                <button className="bg-red-500 text-white px-5 py-2 rounded-md">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </Drawer>
        </React.Fragment>
    );
}
