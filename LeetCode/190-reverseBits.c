/*
Reverse bits of a given 32 bits unsigned integer.

ex1.
Given Input  :  43261596  (0000 0010 1001 0100 0001 1110 1001 1100)
Return Output:  43261596  (0011 1001 0111 1000 0010 1001 0100 0000)

ex2.
Input : 1
Output: 2147483648
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>



uint32_t reverseBits(uint32_t n) {
    
    uint32_t out = 0, z_shifted=0, tmp=0;
    uint32_t z = pow(2, 31);
    
    for (int index=0, shift=0; index<=31; index++, shift++) {
        z_shifted = z >> shift;
        //printf("z_shifted: %u\n", z_shifted);
        
        if (n & z_shifted) {
            tmp = pow(2, index);
            //printf("tmp: %u\t", tmp);

            out += tmp;
            //printf("out: %u\n", out);
        }
    }
    return out;
}

int main()
{
  uint32_t in = 1, out;

  out = reverseBits(in);
  printf("Output: %u\n", out);
}
