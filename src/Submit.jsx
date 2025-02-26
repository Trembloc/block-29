const SubmitForm = () => {
  return (
    <>
      <h1>
        Submit Puppy Here
      </h1>
      <form>
        <label>
          Name: <input />
        </label>
        <label>
          Breed: <input />
        </label>
        <label>
          Status: <input />
        </label>
        <label>
          Image URL: <input />
        </label>
        <label>
          Team Id 'leave blank if none': <input />
        </label>
        <button>Post</button>
      </form>
    </>
  )
}

export default SubmitForm