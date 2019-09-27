public String multiply(String num1, String num2) {
    int[] pos = new int[num1.length() + num2.length()];
    StringBuilder sb = new StringBuilder();
   
    for(int i = num1.length() - 1; i >= 0; i--) {
        for(int j = num2.length() - 1; j >= 0; j--) {
            // - '0': convert to string
            int mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0'); 
            int sum = mul + pos[i+j+1];

            pos[i+j] += sum / 10;
            pos[i+j+1] = (sum) % 10;
        }
    }  
    
    // Remove leading 0's
    for(int p : pos) {
      if(!(sb.length() == 0 && p == 0)) sb.append(p);
    }

    return sb.length() == 0 ? "0" : sb.toString();
}



