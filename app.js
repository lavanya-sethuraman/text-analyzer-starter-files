$(function(){

  getStats();
});




function getStats()
{
	$('button').click(function(event){
	event.preventDefault();

	var userText=$('#user-text').val();
	var words=getWords(userText);

	var totalWords=words.length;
	var uniqueWordCount=getUniqueWords(words);
	var averageWordLength=getAverage(words);
	$('.text-report').find('.js-word-count').text(totalWords);
	$('.text-report').find('.js-unique-words').text(uniqueWordCount);
	$('.text-report').find('.js-average-length').text(averageWordLength);
	$('.text-report').removeClass('hidden');
});
}

function getWords(userText)
{
  return userText.split(/[ ,.!":;-]+/).filter(Boolean);
}

function getUniqueWords(words)
{
  var uniqueWords={};
  for(var i=0;i<words.length;i++)
  {
    if(words in uniqueWords)
      uniqueWords[words[i]]++;
    else
      uniqueWords[words[i]]=1;
  }

  return Object.keys(uniqueWords).length;

}

function getAverage(words)
{
  var total=0;
  for(var i=0;i<words.length;i++)
    {
      total+=words[i].length;
    }
  return total/words.length;
}
