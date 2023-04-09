import { optionstype } from "../@types/Mytypes"
export const brands: optionstype[] = [
    { value: 'boss', label: 'boos' },
    { value: 'underarmur', label: 'underarmur' },
    { value: 'kelvenkline', label: 'kelvenkline' },

];
export const categorys: optionstype[] = [
    { value: 'Shirts', label: 'Shirts' },
    { value: 'pants', label: 'pants' },
    { value: 'shoes', label: 'shoes' },

];
export const colourOptions: optionstype[] = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'forest', label: 'Forest' },
    { value: 'slate', label: 'Slate' },
    { value: 'silver', label: 'Silver' },
];
export const SizeOptions: optionstype[] = [
    { value: 'XS', label: 'XSmall' },
    { value: 'S', label: 'Small' },
    { value: 'M', label: 'Medume' },
    { value: 'L', label: 'Large' },
    { value: 'XL', label: 'XLarge' },
    { value: '2XL', label: '2XLarge' },
    { value: '3XL', label: '3XLarge' },
    { value: '4XL', label: '4XLarge' },
    { value: '5XL', label: '5XLarge' },
    { value: '6XL', label: '6XLarge' },
];
export const SizeOptions2: optionstype[] = [
    { value: '30', label: '30' },
    { value: '31', label: '31' },
    { value: '32', label: '32' },
    { value: '33', label: '33' },
    { value: '34', label: '34' },
    { value: '35', label: '35' },
    { value: '36', label: '36' },
    { value: '37', label: '37' },
    { value: '38', label: '38' },
    { value: '39', label: '39' },
    { value: '40', label: '40' },
    { value: '41', label: '41' },
    { value: '42', label: '42' },
    { value: '43', label: '43' },
    { value: '44', label: '44' },
    { value: '45', label: '45' },
    { value: '46', label: '46' },
    { value: '47', label: '47' },
    { value: '48', label: '48' },
    { value: '49', label: '49' },
    { value: '50', label: '50' },

];
export const stylelableOption: any = {
    control: (base: any) => ({
        ...base,
        border: '1.5px solid black',
        borderRadius: '4px',
        boxShadow: 'none',
        '&:hover': {
            border: '1.5px solid black'
        }
    }), option: (base: any, state: any) => ({
        ...base,
        color: "#1e2022",
        textAlign: 'center',

    })
}