import { Component, useState } from 'react'

export default function SignUpForm() {

   let [fulldata,setData] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()

        // log values from controlled inputs
        console.log('First Name : ' + event.target[0].value);
        console.log('Last Name : ' + event.target[1].value);
        console.log('Email : ' + event.target[2].value);
        console.log('Date : ' + event.target[3].value);
        console.log('Gender : ' + (event.target[4].checked == true ? 'Male' : 'Female'));
        console.log('Country : ' + event.target[6].value);
        console.log('Likes : ' + (event.target[7].checked == true ? 'Pineapple' : 'Liquorice'));

        setData('First Name : ' + event.target[0].value + "\n" + 'Last Name : ' + event.target[1].value + "\n" +'Email : ' + event.target[2].value +
         "\n" + 'Date : ' + event.target[3].value + "\n" + 'Gender : ' + (event.target[4].checked == true ? 'Male' : 'Female') + "\n" +
         'Country : ' + event.target[6].value + "\n" + 'Likes : ' + (event.target[7].checked == true ? 'Pineapple' : 'Liquorice'
        ));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input placeholder='First Name'/>

                <input placeholder='Last Name' />

                <input placeholder='Email' type="email" />

                <input placeholder='Date of Birth' type="date" />

                <br />

                <label>
                    <input type='radio' name='gender' value='Male'></input>
                    Male
                </label>

                <label>
                    <input type='radio' name='gender' value='Female'></input>
                    Female
                </label>

                <br />

                <select name='country'>
                    <option value=''>Select Country</option>
                    <option value='US'>United States</option>
                    <option value='CA'>Canada</option>
                    <option value='MO'>Mexico</option>
                </select>

                <br />

                <label>
                    <input type='checkbox' name='like'/>
                    Likes Pineapple
                </label>

                <label>
                    <input type='checkbox' name='like'/>
                    Likes Liquorice
                </label>

                <br />
                
                <button>Submit</button>
                <label></label>
            </form>
            <textarea id="data" placeholder='Display controlled component values' readOnly value={fulldata} rows="10" cols="50"></textarea>
        </div>
    )
}

/*class SignUpForm extends Component {

    state = {

    }

    handleSubmit = (event) => {
        event.preventDefault()

        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input placeholder='First Name' />

                    <input placeholder='Last Name' />

                    <input placeholder='Email' type="email" />

                    <input placeholder='Date of Birth' type="date" />

                    <br />

                    <label>
                        <input type='radio'></input>
                        Male
                    </label>

                    <label>
                        <input type='radio'></input>
                        Female
                    </label>

                    <br />

                    <select name='country'>
                        <option value=''>Select Country</option>
                        <option value='US'>United States</option>
                        <option value='CA'>Canada</option>
                        <option value='MO'>Mexico</option>
                    </select>

                    <br />

                    <label>
                        <input type='checkbox' />
                        Likes Pineapple
                    </label>

                    <label>
                        <input type='checkbox' />
                        Likes Liquorice
                    </label>

                    <br />
                    
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}*/
