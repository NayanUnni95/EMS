import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
// import java.awt.event.ActionEvent;
// import java.awt.event.ActionListener;

public class Main {
    public Main() {
        JFrame frame = new JFrame("Employee Management system");

        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // Set layout manager
        frame.setLayout(new BorderLayout());

        JLabel label = new JLabel("Employee Details...", JLabel.CENTER);

        frame.add(label, BorderLayout.NORTH);
        // Dummy data
        Object[][] data = {
                { "1", "Alice", "HOD", "0123456789", "name@gmail.com" },
                { "2", "Bob", "Assistant Professor", "0123456789", "name@gmail.com" },
                { "3", "Charlie", "Computer Programmer", "0123456789", "name@gmail.com" },
                { "4", "David", "Trade Instructor", "0123456789", "name@gmail.com" }
        };
        String[] columnNames = { "ID", "Name", "Rank", "Phone no", "Email" };

        DefaultTableModel tableModel = new DefaultTableModel(data, columnNames) {
            @Override
            public boolean isCellEditable(int row, int column) {
                // Make only the 'Delete' column editable
                return column == 3;
            }
        };

        JTable table = new JTable(tableModel);

        // Add action listener for the delete button
        // table.getColumn("Action").setCellRenderer((table1, value, isSelected,
        // hasFocus, row, column) -> {
        // JButton button = new JButton("Delete");
        // button.addActionListener(new ActionListener() {
        // @Override
        // public void actionPerformed(ActionEvent e) {
        // // Remove the row when delete button is clicked
        // tableModel.removeRow(row);
        // }
        // });
        // return button;
        // });

        JScrollPane scrollPane = new JScrollPane(table);
        JPanel tablePanel = new JPanel();

        tablePanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        tablePanel.setLayout(new BorderLayout());
        tablePanel.add(scrollPane, BorderLayout.CENTER);

        frame.add(tablePanel, BorderLayout.CENTER);
        frame.setSize(500, 300);
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new Main();
        });
    }
}
