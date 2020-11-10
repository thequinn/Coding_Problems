public class Kata {
  public static boolean solution(String str, String ending) {

    if(ending.length() > str.length())
      return false;
    String subs = str.substring(str.length() - ending.length());
    return subs.equals(ending);
  }
}
