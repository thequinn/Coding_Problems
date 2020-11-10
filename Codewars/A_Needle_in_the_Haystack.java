public class Kata {

  public static String findNeedle(Object[] haystack) {
    // String.indexOf() can't search an array of String.  That's why we need
    // Arrays.asList()
    int ndx = java.util.Arrays.asList(haystack).indexOf("needle");

    return String.format("found the needle at position %d", ndx);
  }
}
