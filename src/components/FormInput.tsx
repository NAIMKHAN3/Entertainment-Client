import { useForm } from "react-hook-form";

interface IFormInputProps {
    name: string;
    lebel: string;
    type: string
    placeholder?: string
}
const FormInput = (props: IFormInputProps) => {
    const { register,} = useForm();
    return (
        <div className='flex flex-col my-3'>
          <label htmlFor="">{props.lebel}</label>
          <input className='border my-2 px-2 py-1 focus:border-none focus:outline-none focus:ring focus:ring-blue-300'  {...register(`${props.name}`, { required: true })} placeholder={`${props.placeholder}`} type={`${props.type}`} />
        </div>
    );
};

export default FormInput;