package Classes;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class InheritedGuiClass extends JFrame {
    //I will simulate the same approach in 2ndGuiApp
    //Constructor:
    public InheritedGuiClass(){

        //I will create 3 objects of Cat,Lion,Dog:
        Lion myLion = new Lion("Lion",600,"Jungle",true,60);
        //Cat
        Cat myCat = new Cat("Cat", 25, "House", false, 8);
        //Dog
        Dog myDog = new Dog("Dog", 70, "House", false, "Labradoodle");
        setTitle("Second GUI App");
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
        setBounds(10,10,500,880);

        Font fontName = new Font("Courier", Font.BOLD, 20);



        //I will create the parent JPanel:
        //JPanel is the object that contains the control objects like (JButton, JLabel , ... , etc)
        JPanel parentPanel = new JPanel();
        //I will assign the parent panel to the content pane attribute of the JFrame:
        setContentPane(parentPanel); //this.contentPane = parentPanel;
        parentPanel.setLayout(new CardLayout(10,10));

        //Now, I will create the children of the parentPanel:
        //The first child: ------------------------------------------------------------//
        JPanel firstPanel = new JPanel();
        firstPanel.setLayout(null);
        parentPanel.add(firstPanel);
        firstPanel.setBackground(Color.orange);

        //I will add the control objects in firstPanel:
        JLabel firstLabel = new JLabel("Done by Callie W0184129");
        firstLabel.setBounds(50,270,200,30);
        firstPanel.add(firstLabel);

        //You need to declare a 3 radioButtons:
        //You will add actionListeners for each of them. See the firstBtn actionListener below:
        JRadioButton radioButton1 = new JRadioButton("Cat");
        radioButton1.setBounds(50,150,100, 30);
        JRadioButton radioButton2 = new JRadioButton("Dog");
        radioButton2.setBounds(50,190,100, 30);
        JRadioButton radioButton3 = new JRadioButton("Lion");
        radioButton3.setBounds(50,230,100, 30);
        firstPanel.add(radioButton1);
        firstPanel.add(radioButton2);
        firstPanel.add(radioButton3);

        // The second child: ------------------------------------------------------//
        JPanel secondPanel = new JPanel();
        secondPanel.setLayout(null);
        parentPanel.add(secondPanel);
        secondPanel.setBackground(Color.cyan);

        //I will add the required control objects:
        JLabel label1 = new JLabel("Species:");
        label1.setBounds(50,30,200,30);
        secondPanel.add(label1);

        JLabel label2 = new JLabel("Amount of Food:");
        label2.setBounds(50,70,200,30);
        secondPanel.add(label2);

        //Text field to display the species
        JTextField speciesTxt = new JTextField();
        speciesTxt.setBounds(200,30,200,30);
        speciesTxt.setFont(fontName);
        secondPanel.add(speciesTxt);

        //Text panel to display the amount of food needed
        JTextField amountFoodTxt = new JTextField();
        amountFoodTxt.setBounds(200,70,200,30);
        amountFoodTxt.setFont(fontName);
        secondPanel.add(amountFoodTxt);

        //the animal's image is here
        JLabel imageLabel = new JLabel();
        imageLabel.setBounds(50,110,350,350);
        secondPanel.add(imageLabel);

        //A text area to contain the animal's toString information with word wrap.
        JTextArea animalString = new JTextArea();
        animalString.setBounds(50,430,400,200);
        animalString.setFont(fontName);
        animalString.setLineWrap(true);
        animalString.setWrapStyleWord(true);
        secondPanel.add(animalString);

        //Button to go back to the first page
        JButton secondBtn = new JButton("Go Back");
        secondBtn.setBounds(200,640,200,30);
        secondPanel.add(secondBtn);

        //ActionListeners: ----------------------------------------------------------//
        radioButton1.addActionListener(new ActionListener(){
            public void actionPerformed(ActionEvent e){
                //sets first panel to invisible, shows panel 2
                firstPanel.setVisible(false);
                secondPanel.setVisible(true);
                speciesTxt.setText(myCat.getSpecies());
                animalString.setText(myCat.toString());

                imageLabel.setIcon(new ImageIcon(getClass().getResource("/Classes/Images/cat.jpg")));
                //I will do the math related to the amount of food:
                double amountOfFood = 0.15 * myCat.getMaxWeight();
                amountFoodTxt.setText(String.format("%.2flb",amountOfFood));


            }
        });

        radioButton2.addActionListener(new ActionListener(){
            public void actionPerformed(ActionEvent e){
                firstPanel.setVisible(false);
                secondPanel.setVisible(true);
                speciesTxt.setText(myDog.getSpecies());
                animalString.setText(myDog.toString());

                imageLabel.setIcon(new ImageIcon(getClass().getResource("/Classes/Images/dog.jpg")));
                //I will do the math related to the amount of food:
                double amountOfFood = 0.15 * myDog.getMaxWeight();
                amountFoodTxt.setText(String.format("%.2flb",amountOfFood));


            }
        });

        radioButton3.addActionListener(new ActionListener(){
            public void actionPerformed(ActionEvent e){
                firstPanel.setVisible(false);
                secondPanel.setVisible(true);
                speciesTxt.setText(myLion.getSpecies());
                animalString.setText(myLion.toString());

                imageLabel.setIcon(new ImageIcon(getClass().getResource("/Classes/Images/lion.jpg")));
                //I will do the math related to the amount of food:
                double amountOfFood = 0.15 * myLion.getMaxWeight();
                amountFoodTxt.setText(String.format("%.2flb",amountOfFood));


            }
        });


        secondBtn.addActionListener(new ActionListener(){
            public void actionPerformed(ActionEvent e){
                firstPanel.setVisible(true);
                secondPanel.setVisible(false);
                //set each radio button to false to deselect them when switching back
                radioButton1.setSelected(false);
                radioButton2.setSelected(false);
                radioButton3.setSelected(false);
            }
        });


    }
}
