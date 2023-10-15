import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Load the fraudulent dataset
fraudulent_data = pd.read_csv(r"fraudulent_data.csv")

# Load the legitimate dataset
legitimate_data = pd.read_csv(r"legitimate_data.csv")

# Combine both datasets
combined_data = pd.concat([fraudulent_data, legitimate_data], ignore_index=True)



# Define features and target variable
X = combined_data.drop(columns=['fraud'])
y = combined_data['fraud']


# Split the combined data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the Random Forest classifier
rf_classifier = RandomForestClassifier(n_estimators=100, random_state=42)
rf_classifier.fit(X_train, y_train)

# Evaluate the model on the test data
y_pred = rf_classifier.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy:.2f}')
print(classification_report(y_test, y_pred))

# Load new data for predictions
new_data = pd.read_csv(r"new_data.csv")



# Make predictions on the new data
new_data_predictions = rf_classifier.predict(new_data)

print(new_data_predictions)
