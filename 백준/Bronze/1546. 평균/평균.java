import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int cnt = sc.nextInt();
        double[] ary = new double[cnt];
        double sum = 0;
        for(int i=0; i<cnt; i++){
            ary[i] = sc.nextDouble();
        }
        Arrays.sort(ary);
        double max = ary[ary.length-1];
        for(int i =0; i<cnt; i++){
            sum+=ary[i]/max*100;
        };
        System.out.println(sum/cnt);
    }
}