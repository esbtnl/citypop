import '../css/cityForm.css'
import { useForm } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'

/**
 * Component creating the form searching for a city
 */
export const CityForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm()

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('city')} placeholder="City" name="city" id="searchBar" />
        <br />
        <button type="submit" id="searchBtn">
          <FaSearch className="searchIcon" />
        </button>
      </form>
    </div>
  )
}
