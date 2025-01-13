// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.

import javax.swing.JOptionPane;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Friend> friendsList = new ArrayList<>();

        infoBox("Welcome to the Party Picker.\n\nEnter the person's name" +
                "and the type of food they're likely to bring.\n" +
                "Then indicate whether they are actually invited to the party or not.", "Party List");

        while (true){
            String firstName = JOptionPane.showInputDialog("Enter first name: ");
            String lastName = JOptionPane.showInputDialog("Enter last name: ");
            String foodToBring = JOptionPane.showInputDialog("Enter the food for them to bring: ");
            boolean isInvited = JOptionPane.showConfirmDialog(null, "Is the person invited?", "Invitation", JOptionPane.YES_NO_OPTION) == JOptionPane.YES_OPTION;


            Friend friend = new Friend(firstName, lastName, isInvited, foodToBring);
            friendsList.add(friend);

            int continueEntering = JOptionPane.showConfirmDialog(null, "Do you want to enter another guest?", "Continue?", JOptionPane.YES_NO_OPTION);
            if (continueEntering == JOptionPane.NO_OPTION) {
                break;
            }
        }
        StringBuilder friendInfo = new StringBuilder("List of Friends:\n");
        for(Friend friend : friendsList){
            String invited = friend.getIsInvited() ? "They are invited to the party." : "They are NOT invited to the party.";
            friendInfo.append(friend.getFullName()).append(" is bringing ").append(friend.getFoodToBring().toLowerCase()).append(". ").append(invited).append("\n");
        }
        JOptionPane.showMessageDialog(null, friendInfo.toString());
        System.exit(0);
    }
    public static void infoBox(String welcomeMessage, String titleBar) {
        JOptionPane.showMessageDialog(null, welcomeMessage, "Welcome! Please enter your list for your party. " + titleBar, JOptionPane.INFORMATION_MESSAGE);
    }

    }