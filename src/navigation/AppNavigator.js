import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

// Auth
import SplashScreen from '../screens/auth/SplashScreen';

// Enterprise Login & Registration
import EnterInviteScreen from '../screens/registration/EnterInviteScreen';
import OTPVerificationScreen from '../screens/registration/OTPVerificationScreen';
import TermsConsentScreen from '../screens/registration/TermsConsentScreen';
import BasicProfileScreen from '../screens/registration/BasicProfileScreen';
import AddressDetailsScreen from '../screens/registration/AddressDetailsScreen';
import IdentityVerificationScreen from '../screens/registration/IdentityVerificationScreen';
import BackgroundCheckScreen from '../screens/registration/BackgroundCheckScreen';
import TaxInformationScreen from '../screens/registration/TaxInformationScreen';
import BankDetailsScreen from '../screens/registration/BankDetailsScreen';
import EmergencyContactScreen from '../screens/registration/EmergencyContactScreen';
import SetAvailabilityScreen from '../screens/registration/SetAvailabilityScreen';
import SelectServicesScreen from '../screens/registration/SelectServicesScreen';
import SubmitApprovalScreen from '../screens/registration/SubmitApprovalScreen';
import ApprovalPendingScreen from '../screens/registration/ApprovalPendingScreen';
import RejectionScreen from '../screens/registration/RejectionScreen';
import SuspendedScreen from '../screens/registration/SuspendedScreen';
import KYCUploadScreen from '../screens/registration/KYCUploadScreen';
import TrainingStatusScreen from '../screens/registration/TrainingStatusScreen';
import SetServiceAreaScreen from '../screens/registration/SetServiceAreaScreen';
import AddPayoutScreen from '../screens/registration/AddPayoutScreen';
import CreateAccountScreen from '../screens/registration/CreateAccountScreen';
import VerifyMobileScreen from '../screens/registration/VerifyMobileScreen';
import VerifyEmailScreen from '../screens/registration/VerifyEmailScreen';
import CompleteProfileScreen from '../screens/registration/CompleteProfileScreen';

// Auth (additional)
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import LoginOTPScreen from '../screens/auth/LoginOTPScreen';

// Main
import HomeScreen from '../screens/main/HomeScreen';
import AccountApprovedScreen from '../screens/main/AccountApprovedScreen';
import OnlineOfflineScreen from '../screens/main/OnlineOfflineScreen';
import LocationPermissionScreen from '../screens/main/LocationPermissionScreen';
import AvailabilityScreen from '../screens/main/AvailabilityScreen';
import ScheduleScreen from '../screens/main/ScheduleScreen';

// Jobs
import JobsListScreen from '../screens/jobs/JobsListScreen';
import AvailableJobsScreen from '../screens/jobs/AvailableJobsScreen';
import NewJobAlertScreen from '../screens/jobs/NewJobAlertScreen';
import JobDetailsScreen from '../screens/jobs/JobDetailsScreen';
import AcceptJobScreen from '../screens/jobs/AcceptJobScreen';
import RejectJobScreen from '../screens/jobs/RejectJobScreen';
import DeclineJobScreen from '../screens/jobs/DeclineJobScreen';
import AcceptedJobSummaryScreen from '../screens/jobs/AcceptedJobSummaryScreen';
import NavigationToJobScreen from '../screens/jobs/NavigationToJobScreen';
import ArrivedScreen from '../screens/jobs/ArrivedScreen';
import StartServiceScreen from '../screens/jobs/StartServiceScreen';
import InProgressScreen from '../screens/jobs/InProgressScreen';
import CompletionChecklistScreen from '../screens/jobs/CompletionChecklistScreen';
import ProofUploadScreen from '../screens/jobs/ProofUploadScreen';
import CompleteJobScreen from '../screens/jobs/CompleteJobScreen';
import CustomerConfirmationScreen from '../screens/jobs/CustomerConfirmationScreen';
import JobCompletionSuccessScreen from '../screens/jobs/JobCompletionSuccessScreen';
import CompletedJobDetailScreen from '../screens/jobs/CompletedJobDetailScreen';
import CancelledJobDetailScreen from '../screens/jobs/CancelledJobDetailScreen';
import CancelJobScreen from '../screens/jobs/CancelJobScreen';
import RaiseIssueScreen from '../screens/jobs/RaiseIssueScreen';
import EmergencySOSScreen from '../screens/jobs/EmergencySOSScreen';

// Earnings
import EarningsScreen from '../screens/earnings/EarningsScreen';
import EarningsBreakdownScreen from '../screens/earnings/EarningsBreakdownScreen';
import PayoutHistoryScreen from '../screens/earnings/PayoutHistoryScreen';
import IncentivesScreen from '../screens/earnings/IncentivesScreen';
import InstantPayoutScreen from '../screens/earnings/InstantPayoutScreen';

// Notifications
import NotificationsScreen from '../screens/notifications/NotificationsScreen';
import NotificationDetailScreen from '../screens/notifications/NotificationDetailScreen';

// Support
import SupportScreen from '../screens/support/SupportScreen';
import RaiseTicketScreen from '../screens/support/RaiseTicketScreen';
import TicketStatusScreen from '../screens/support/TicketStatusScreen';
import SafetyToolkitScreen from '../screens/support/SafetyToolkitScreen';

// Profile
import ProfileScreen from '../screens/profile/ProfileScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import ManageDocumentsScreen from '../screens/profile/ManageDocumentsScreen';
import BankSettingsScreen from '../screens/profile/BankSettingsScreen';
import AppSettingsScreen from '../screens/profile/AppSettingsScreen';
import LogoutScreen from '../screens/profile/LogoutScreen';
import PerformanceDashboardScreen from '../screens/profile/PerformanceDashboardScreen';
import TrainingCenterScreen from '../screens/profile/TrainingCenterScreen';
import MyEnterprisesScreen from '../screens/profile/MyEnterprisesScreen';
import JoinEnterpriseScreen from '../screens/profile/JoinEnterpriseScreen';

// Service
import ServiceChecklistScreen from '../screens/service/ServiceChecklistScreen';
import MaterialRequirementScreen from '../screens/service/MaterialRequirementScreen';
import ServiceExtensionScreen from '../screens/service/ServiceExtensionScreen';
import CustomerRatingScreen from '../screens/service/CustomerRatingScreen';
import ReferenceUIScreen from '../screens/ReferenceUIScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Jobs') iconName = focused ? 'briefcase' : 'briefcase-outline';
          else if (route.name === 'Schedule') iconName = focused ? 'calendar' : 'calendar-outline';
          else if (route.name === 'Earnings') iconName = focused ? 'wallet' : 'wallet-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        headerShown: false,
        tabBarStyle: { borderTopWidth: 0, elevation: 8, shadowOpacity: 0.08, shadowRadius: 8, paddingTop: 4, height: 60, paddingBottom: 8 },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Jobs" component={JobsListScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Earnings" component={EarningsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Splash */}
        <Stack.Screen name="Splash" component={SplashScreen} />

        {/* Enterprise Invite Login */}
        <Stack.Screen name="EnterInvite" component={EnterInviteScreen} />
        <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LoginOTP" component={LoginOTPScreen} />

        {/* USA Buddy Onboarding Flow */}
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="VerifyMobile" component={VerifyMobileScreen} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
        <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} />
        <Stack.Screen name="TermsConsent" component={TermsConsentScreen} />
        <Stack.Screen name="BasicProfile" component={BasicProfileScreen} />
        <Stack.Screen name="AddressDetails" component={AddressDetailsScreen} />
        <Stack.Screen name="IdentityVerification" component={IdentityVerificationScreen} />
        <Stack.Screen name="BackgroundCheck" component={BackgroundCheckScreen} />
        <Stack.Screen name="TaxInformation" component={TaxInformationScreen} />
        <Stack.Screen name="BankDetails" component={BankDetailsScreen} />
        <Stack.Screen name="EmergencyContact" component={EmergencyContactScreen} />
        <Stack.Screen name="SetAvailability" component={SetAvailabilityScreen} />
        <Stack.Screen name="SelectServices" component={SelectServicesScreen} />
        <Stack.Screen name="SubmitApproval" component={SubmitApprovalScreen} />
        <Stack.Screen name="ApprovalPending" component={ApprovalPendingScreen} />
        <Stack.Screen name="Rejection" component={RejectionScreen} />
        <Stack.Screen name="Suspended" component={SuspendedScreen} />

        {/* Legacy (redirects) */}
        <Stack.Screen name="KYCUpload" component={KYCUploadScreen} />
        <Stack.Screen name="SetServiceArea" component={SetServiceAreaScreen} />
        <Stack.Screen name="AddPayout" component={AddPayoutScreen} />
        <Stack.Screen name="TrainingStatus" component={TrainingStatusScreen} />

        {/* Post-Approval */}
        <Stack.Screen name="AccountApproved" component={AccountApprovedScreen} />

        {/* Main Tabs */}
        <Stack.Screen name="MainTabs" component={MainTabs} />

        {/* Home Sub-screens */}
        <Stack.Screen name="OnlineOffline" component={OnlineOfflineScreen} />
        <Stack.Screen name="LocationPermission" component={LocationPermissionScreen} />
        <Stack.Screen name="Availability" component={AvailabilityScreen} />

        {/* Job Flow */}
        <Stack.Screen name="AvailableJobs" component={AvailableJobsScreen} />
        <Stack.Screen name="NewJobAlert" component={NewJobAlertScreen} />
        <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
        <Stack.Screen name="AcceptJob" component={AcceptJobScreen} />
        <Stack.Screen name="RejectJob" component={RejectJobScreen} />
        <Stack.Screen name="DeclineJob" component={DeclineJobScreen} />
        <Stack.Screen name="AcceptedJobSummary" component={AcceptedJobSummaryScreen} />
        <Stack.Screen name="NavigationToJob" component={NavigationToJobScreen} />
        <Stack.Screen name="Arrived" component={ArrivedScreen} />
        <Stack.Screen name="StartService" component={StartServiceScreen} />
        <Stack.Screen name="InProgress" component={InProgressScreen} />
        <Stack.Screen name="CompletionChecklist" component={CompletionChecklistScreen} />
        <Stack.Screen name="ProofUpload" component={ProofUploadScreen} />
        <Stack.Screen name="CompleteJob" component={CompleteJobScreen} />
        <Stack.Screen name="CustomerConfirmation" component={CustomerConfirmationScreen} />
        <Stack.Screen name="JobCompletionSuccess" component={JobCompletionSuccessScreen} />
        <Stack.Screen name="CompletedJobDetail" component={CompletedJobDetailScreen} />
        <Stack.Screen name="CancelledJobDetail" component={CancelledJobDetailScreen} />
        <Stack.Screen name="CancelJob" component={CancelJobScreen} />
        <Stack.Screen name="RaiseIssue" component={RaiseIssueScreen} />
        <Stack.Screen name="EmergencySOS" component={EmergencySOSScreen} />

        {/* Earnings */}
        <Stack.Screen name="EarningsBreakdown" component={EarningsBreakdownScreen} />
        <Stack.Screen name="PayoutHistory" component={PayoutHistoryScreen} />
        <Stack.Screen name="Incentives" component={IncentivesScreen} />
        <Stack.Screen name="InstantPayout" component={InstantPayoutScreen} />

        {/* Notifications */}
        <Stack.Screen name="NotificationDetail" component={NotificationDetailScreen} />

        {/* Support & Safety */}
        <Stack.Screen name="Support" component={SupportScreen} />
        <Stack.Screen name="RaiseTicket" component={RaiseTicketScreen} />
        <Stack.Screen name="TicketStatus" component={TicketStatusScreen} />
        <Stack.Screen name="SafetyToolkit" component={SafetyToolkitScreen} />

        {/* Profile */}
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="ManageDocuments" component={ManageDocumentsScreen} />
        <Stack.Screen name="BankSettings" component={BankSettingsScreen} />
        <Stack.Screen name="AppSettings" component={AppSettingsScreen} />
        <Stack.Screen name="Logout" component={LogoutScreen} />
        <Stack.Screen name="Performance" component={PerformanceDashboardScreen} />
        <Stack.Screen name="TrainingCenter" component={TrainingCenterScreen} />
        <Stack.Screen name="MyEnterprises" component={MyEnterprisesScreen} />
        <Stack.Screen name="JoinEnterprise" component={JoinEnterpriseScreen} />

        {/* Service */}
        <Stack.Screen name="ServiceChecklist" component={ServiceChecklistScreen} />
        <Stack.Screen name="MaterialRequirement" component={MaterialRequirementScreen} />
        <Stack.Screen name="ServiceExtension" component={ServiceExtensionScreen} />
        <Stack.Screen name="CustomerRating" component={CustomerRatingScreen} />
        <Stack.Screen name="ReferenceUI" component={ReferenceUIScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
