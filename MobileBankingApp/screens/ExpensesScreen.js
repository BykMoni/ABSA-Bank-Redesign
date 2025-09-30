import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Svg, { Circle, Path, Text as SvgText } from 'react-native-svg';

const PieChartSegment = ({ color, label, amount }) => (
  <View style={styles.chartLegendItem}>
    <View style={[styles.chartLegendColor, { backgroundColor: color }]} />
    <View style={styles.chartLegendDetails}>
      <Text style={styles.chartLegendLabel}>{label}</Text>
      <Text style={styles.chartLegendAmount}>GHC {amount}</Text>
    </View>
  </View>
);

const PieChart = ({ data, size = 120 }) => {
  const center = size / 2;
  const radius = size / 2 - 10;
  
  // Calculate angles for each segment
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -90; // Start from top
  
  const createPath = (startAngle, endAngle) => {
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    const x1 = center + radius * Math.cos(startAngleRad);
    const y1 = center + radius * Math.sin(startAngleRad);
    const x2 = center + radius * Math.cos(endAngleRad);
    const y2 = center + radius * Math.sin(endAngleRad);
    
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    
    return `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };
  
  return (
    <Svg width={size} height={size}>
      {data.map((item, index) => {
        const angle = (item.value / total) * 360;
        const endAngle = currentAngle + angle;
        const path = createPath(currentAngle, endAngle);
        currentAngle = endAngle;
        
        return (
          <Path
            key={index}
            d={path}
            fill={item.color}
            stroke="#fff"
            strokeWidth="2"
          />
        );
      })}
      {/* Center circle for inner content */}
      <Circle
        cx={center}
        cy={center}
        r={radius * 0.5}
        fill="#fff"
        stroke="#f0f0f0"
        strokeWidth="1"
      />
    </Svg>
  );
};

const TransactionItem = ({ icon, direction, description, date, amount, subtitle }) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionIconContainer}>
      <MaterialCommunityIcons 
        name={icon} 
        size={20} 
        color={direction === 'in' ? 'green' : 'red'} 
      />
    </View>
    <View style={styles.transactionDetails}>
      <Text style={styles.transactionDescription}>{description}</Text>
      <Text style={styles.transactionSubtitle}>{subtitle}</Text>
    </View>
    <View style={styles.transactionRight}>
      <Text style={styles.transactionAmount}>GHC {amount}</Text>
      <Text style={styles.transactionDate}>{date}</Text>
    </View>
  </View>
);

export default function ExpensesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.redHeader}>
          <View style={styles.headerTop}>
            <TouchableOpacity>
              <Feather name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addAccountButton}>
              <Feather name="plus" size={20} color="#fff" />
              <Text style={styles.addAccountText}>Add New Account</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.totalBalanceSection}>
            <Text style={styles.totalBalanceLabel}>Total Available Balance</Text>
            <Text style={styles.totalBalanceAmount}>GHC 150,000.00</Text>
            <Text style={styles.budgetInfo}>Your spending was 30% over budget last month</Text>
          </View>
        </View>

        {/* White Content Area */}
        <View style={styles.whiteContent}>
          {/* Budget Overview with Date Selector */}
          <View style={styles.budgetSection}>
            <TouchableOpacity style={styles.dateSelector}>
              <Text style={styles.dateText}>June, 2025</Text>
              <Feather name="chevron-down" size={16} color="#fff" />
            </TouchableOpacity>

            {/* Pie Chart */}
            <View style={styles.chartContainer}>
              <View style={styles.pieChartWrapper}>
                <PieChart 
                  size={120}
                  data={[
                    { value: 2000, color: '#3c0bc2ff' }, // Rent
                    { value: 2500, color: '#C20B2F' }, // Chillings 
                    { value: 9000, color: '#FFA500' }, // Building
                    { value: 1500, color: '#4CAF50' }  // Subs
                  ]}
                />
                <View style={styles.chartCenter}>
                  <Text style={styles.chartCenterLabel}>Total Budget</Text>
                  <Text style={styles.chartCenterAmount}>GHC 15,000.00</Text>
                </View>
              </View>
              
              {/* Chart Legend */}
              <View style={styles.chartLegend}>
                <PieChartSegment color="#3c0bc2ff" label="Rent" amount="2,000.00" />
                <PieChartSegment color="#C20B2F" label="Chillings" amount="2,500.00" />
                <PieChartSegment color="#FFA500" label="Building" amount="9,000.00" />
                <PieChartSegment color="#4CAF50" label="Subs" amount="1,500.00" />
              </View>
            </View>
          </View>

          {/* Transactions Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Transactions</Text>
            
            <TransactionItem
              icon="arrow-bottom-left"
              direction="in"
              description="From 233 Cars"
              subtitle="Payout"
              amount="5,000.00"
              date="1 Jul, 2025"
            />
            
            <TransactionItem
              icon="arrow-bottom-left"
              direction="in"
              description="From ysavedep"
              subtitle="Payout"
              amount="15,000.00"
              date="15 March,2025"
            />
            
            <TransactionItem
              icon="arrow-top-right"
              direction="out"
              description="To Marie"
              subtitle="MoMo Transfer"
              amount="2,000.00"
              date="12 March, 2025"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C20B2F',
    top: 40,
  },
  scrollContent: {
    flexGrow: 1,
  },
  redHeader: {
    backgroundColor: '#C20B2F',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  addAccountButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addAccountText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 12,
  },
  totalBalanceSection: {
    alignItems: 'center',
  },
  totalBalanceLabel: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    right: 70,
  },
  totalBalanceAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    right: 35,
  },
  budgetInfo: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
    right: 5,
  },
  whiteContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 10,
    padding: 20,
  },
  budgetSection: {
    marginBottom: 30,
  },
  dateSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C20B2F',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  dateText: {
    color: '#fff',
    marginRight: 5,
    fontSize: 14,
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pieChartWrapper: {
    width: 120,
    height: 120,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
  },
  chartCenter: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 40,
  },
  chartCenterLabel: {
    fontSize: 10,
    textAlign: 'center',
  },
  chartCenterAmount: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3f3e3eff',
  },
  chartLegend: {
    flex: 1,
    marginRight: 10,
  },
  chartLegendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  chartLegendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  chartLegendDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chartLegendLabel: {
    fontSize: 14,
    color: '#000',
  },
  chartLegendAmount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transactionIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionDate: {
    fontSize: 12,
    color: '#888',
  },
});