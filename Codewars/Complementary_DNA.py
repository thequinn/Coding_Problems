

def DNA_strand(dna):

  complements = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  }

  return "".join([ complements[c] for c in dna ])


print(DNA_strand ("ATTGC")) # return "TAACG"
print(DNA_strand ("GTAT"))  # return "CATA"
