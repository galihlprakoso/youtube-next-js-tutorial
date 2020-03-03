import quotes from '../../quotes.json';

export default (req, res) => {
  const { author } = req.query;
  let filteredQuotes = quotes;

  if(author) {
    filteredQuotes = quotes.filter(quote => 
      quote.quoteAuthor.toLowerCase().includes(author.toLowerCase()));
  }

  if(!filteredQuotes.length) {
    filteredQuotes = [{ quoteAuthor: 'Not found', quoteText: `Quote with author : ${author} is not found.`}];
  }

  const quote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
  res.status(200).json(quote);
}