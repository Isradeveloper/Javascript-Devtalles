/**
 * @returns {Promise<Object>}  Quote information
 */
const fetchQuote = async(numQuotes = 5) => {
  
  const response = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes/${numQuotes}`);
  const data = await response.json();
  return data
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async ( element ) => {

  document.querySelector('#app-title').innerHTML = 'Breakingbad App';

  const nextQuotesButton = document.createElement('button')
  nextQuotesButton.textContent = "Next 5 Quotes"
  
  nextQuotesButton.addEventListener('click', async() => {
    await getNewQuotes(5, element, nextQuotesButton)
  })

  await getNewQuotes(5, element, nextQuotesButton)


}

const renderQuotes = (quotes, element) => {
  for (const {quote, author} of quotes) {
    const div = document.createElement('div')
    const quoteElement = document.createElement('blockquote')
    const authorHtml = document.createElement('h4')

    quoteElement.innerHTML = quote
    authorHtml.innerHTML = `${author} <br/><br/>`

    div.append(quoteElement, authorHtml)

    element.append(div)
  }
}


const getNewQuotes = async(numQuotes = 5, element, buttonElement) => {
  element.innerHTML = 'Loading ...';
  const quotes = await fetchQuote(numQuotes);
  element.innerHTML = '';
  renderQuotes(quotes, element);
  element.append(buttonElement);
}