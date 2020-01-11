
def title_case(title, minor_words = ""):
  title = title.capitalize().split()
  minor_words = minor_words.lower().split()

  return ' '.join([word if word in minor_words else word.capitalize() for word in title])


print(title_case('a clash of KINGS', 'a an the of')) # 'A Clash of Kings'
print(title_case('THE WIND IN THE WILLOWS', 'The In')) # 'The Wind in the Willows'
print(title_case('the quick brown fox')) # 'The Quick Brown Fox'

print(title_case('')) # ''
print(title_case('First a of in', 'an often into')) # 'First A Of In'
