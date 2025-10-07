import FullNameField from "../fields/pacient/FullNameField";
import PreferredNameField from "../fields/pacient/PreferredNameField";
import MotherNameField from "../fields/pacient/MotherNameField";
import CpfField from "../fields/pacient/CpfField";
import DateOfBirthField from "../fields/pacient/DateOfBirthField";
import GenderField from "../fields/pacient/GenderField";
import PostalCodeField from "../fields/address/PostalCodeField";
import StreetField from "../fields/address/StreetField";
import CityField from "../fields/address/CityField";
import StateField from "../fields/address/StateField";
import NeighborhoodField from "../fields/address/NeighborhoodField";
import HouseNumberField from "../fields/address/HouseNumberField";
import AddressLine2Field from "../fields/address/AddressLine2Field";
import styles from "../../styles/Register.module.css";


function RegisterForm(){
    return(
      <div>
        <label className={styles.Tdados}>Dados</label>
        <FullNameField/>
        <PreferredNameField/>
        <MotherNameField/>
        <CpfField/>
        <DateOfBirthField/>
        <GenderField/>

        <label className={styles.Tendereco}>Endereço</label>
        <PostalCodeField/>
        <StreetField/>
        <CityField/>
        <StateField/>
        <NeighborhoodField/>
        <HouseNumberField/>
        <AddressLine2Field/>
      </div>
    );
}

export default RegisterForm;