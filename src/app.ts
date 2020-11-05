const form = document.querySelector('form')!
const formInput =form.querySelector('#address')! as HTMLInputElement

function renderMap(event: Event): any {
    event.preventDefault();
    const enteredAddress= formInput.value;

    //send enteredAddress to Google's API
}

form.addEventListener('submit', renderMap)