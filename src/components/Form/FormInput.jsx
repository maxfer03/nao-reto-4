import './FormInput.scss'

const FormInput = ({config}) => {
  return ( 
    <div className='form-input'>
      <label class="label">
        <span class="label-text">{config.label}</span>
      </label>
      <input
        className='input input-bordered input-sm w-full max-w-xs'
        id={config.name}
        name={config.name}
        type={config.type}
        onChange={config.onChange}
        value={config.value}
      />
      {config.errors ? 
      (
        <div class='label error'>
          <span class="label-text-alt error-text">
          {config.errors}
          </span>
        </div>
      )
      : null}
    </div>
   );
}
 
export default FormInput;