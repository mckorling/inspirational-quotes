import { useEffect, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  // const [quote, setQuote] = useState<Quote | undefined>(); // we don't know what a quote is yet, so need to pass in options
  const [quotes, setQuotes] = useState<Quote[]>([]); // can't just pass in an empty array like in js (without a template)
  // it will say it's a type never, it needs to know what goes in the array

  // swap from one quote to multiple quotes, don't need useEffect now
  // useEffect(() => {
  //   fetchRandomQuote().then(setQuote);
  // }, []);

  // if (!quote) return <Loading />;
  // now quote definitely exists, so can access it's properties
  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      {/* <InspirationalQuote content={quote.content} source={quote.source} /> */}
      <Quotes setQuotes={setQuotes}>
        <div className="grid grid-cols-2 gap-4">
          {quotes.map((quote) => {
            return (
              <InspirationalQuote
                key={quote.id}
                source={quote.source}
                content={quote.content}
              ></InspirationalQuote>
            );
          })}
        </div>
      </Quotes>
    </main>
  );
};

export default Application;
