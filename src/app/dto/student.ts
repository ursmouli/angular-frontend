import { Address } from "./address";
import { Guardian } from "./guardian";

export interface Student {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dob: Date;
    registrationNumber: string;
    permanentAddress: Address;
    residentialAddress: Address;
    guardians: Guardian[];
}