import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import Drawer from "@/Components/Drawer";
import Navbar from "@/Components/Navbar";
import { Employee } from "@/types/models/employee";
import Table from "@/Components/Tables/Table";
import TableHeadRow from "@/Components/Tables/TableHeadRow";
import TableHeadData from "@/Components/Tables/TableHeadData";
import TableRow from "@/Components/Tables/TableRow";
import TableData from "@/Components/Tables/TableData";
import Modal from "@/Components/Modal";
import AddEmployeeForm from "@/Components/Forms/AddEmployeeForm";

export default function EmployeesLaoyout() {
    const { employees } = usePage<{ employees: Array<Employee> }>().props;
    return (
        <React.Fragment>
            <Head>
                <title>Employees</title>
            </Head>
            <Drawer current="Employees">
                <Navbar />
                <section className="w-full h-[90vh] bg-gray-200 p-10">
                    <div className="w-full h-fit flex justify-end items-center py-4 px-5 bg-white rounded">
                        <label
                            htmlFor="modal"
                            className="btn bg-blue-500 text-lg text-white hover:bg-blue-600 transition-colors duration-200 ease-in-out border-none items-center flex gap-2"
                        >
                            Add Employee
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                        </label>

                        {/* Put this part before </body> tag */}
                        <Modal>
                            <AddEmployeeForm />
                        </Modal>
                    </div>
                    <div className="w-full h-full bg-white">
                        <Table className="w-full table table-auto">
                            <TableHeadRow>
                                <TableHeadData className=" rounded-tl-md">
                                    Employee ID
                                </TableHeadData>
                                <TableHeadData>Avatar</TableHeadData>
                                <TableHeadData>Full Name</TableHeadData>
                                <TableHeadData>Gender</TableHeadData>
                                <TableHeadData>Email</TableHeadData>
                                <TableHeadData>Phone</TableHeadData>
                                <TableHeadData>Role</TableHeadData>
                                <TableHeadData className=" rounded-tr-md">
                                    Actions
                                </TableHeadData>
                            </TableHeadRow>
                            <tbody>
                                {employees.map(
                                    (employee: Employee, index: number) => (
                                        <TableRow
                                            key={index}
                                            className="odd:bg-secondary hover:bg-gray-200 transition-colors duration-300 ease-in-out"
                                        >
                                            <TableHeadData>
                                                {employee.id}
                                            </TableHeadData>
                                            <TableData>
                                                <div className="h-fit w-auto py-1">
                                                    <img
                                                        src={`storage/${employee.image}`}
                                                        alt={
                                                            employee.first_name
                                                        }
                                                        className=" h-20 object-scale-down object-center mx-auto rounded-xl"
                                                    />
                                                </div>
                                            </TableData>
                                            <TableData>
                                                {employee.last_name +
                                                    ", " +
                                                    employee.first_name}
                                            </TableData>
                                            <TableData>
                                                {employee.gender}
                                            </TableData>
                                            <TableData className="truncate">
                                                {employee.email}
                                            </TableData>
                                            <TableData>
                                                {employee.phone}
                                            </TableData>
                                            <TableData>
                                                {employee.role}
                                            </TableData>
                                            <TableData className="gap-2 text-center">
                                                <div className="flex justify-center gap-2">
                                                    <Link
                                                        href={route(
                                                            "employee.edit",
                                                            {
                                                                employee_id:
                                                                    employee.id,
                                                            }
                                                        )}
                                                        htmlFor="modal-edit-product"
                                                        className="bg-amber-500 text-white hover:bg-amber-600 transition-colors duration-200 ease-in-out rounded text-lg px-4 py-2"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <div className="dropdown dropdown-top dropdown-end">
                                                        <div
                                                            tabIndex={0}
                                                            role="button"
                                                            className=" bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 ease-in-out rounded text-lg px-4 py-2"
                                                        >
                                                            Delete
                                                        </div>
                                                        <ul
                                                            tabIndex={0}
                                                            className="dropdown-content z-[1] menu p-2 bg-white shadow rounded-box w-52"
                                                        >
                                                            <li>
                                                                <Link
                                                                    href={route(
                                                                        "employee.destroy",
                                                                        {
                                                                            employee_id:
                                                                                employee.id,
                                                                        }
                                                                    )}
                                                                    className={
                                                                        "text-black hover:text-white bg-white hover:bg-red-600 transition-colors duration-200 ease-in-out"
                                                                    }
                                                                    method="delete"
                                                                    as="button"
                                                                >
                                                                    Confirm
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </TableData>
                                        </TableRow>
                                    )
                                )}
                            </tbody>
                        </Table>
                    </div>
                </section>
            </Drawer>
        </React.Fragment>
    );
}
