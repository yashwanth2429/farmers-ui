import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { User, Mail, Phone, MapPin, Bell, Shield, LogOut } from 'lucide-react';

const Profile = () => {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Profile</h2>

            <div className="grid gap-6 md:grid-cols-[300px_1fr]">
                {/* Sidebar / User Card */}
                <Card>
                    <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary text-3xl font-bold">
                            JD
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-bold text-xl">John Doe</h3>
                            <p className="text-sm text-muted-foreground">Farmer • Premium Member</p>
                        </div>
                        <Button className="w-full" variant="outline">
                            <LogOut className="w-4 h-4 mr-2" />
                            Sign Out
                        </Button>
                    </CardContent>
                </Card>

                {/* Main Content */}
                <div className="space-y-6">
                    {/* Personal Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">First Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input defaultValue="John" className="pl-9" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Last Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input defaultValue="Doe" className="pl-9" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input defaultValue="john.doe@example.com" className="pl-9" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Phone</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input defaultValue="+1 (555) 000-0000" className="pl-9" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Address</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input defaultValue="123 Farm Lane, Countryside, USA" className="pl-9" />
                                </div>
                            </div>
                            <div className="pt-2">
                                <Button>Save Changes</Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="flex items-center space-x-4">
                                    <Bell className="w-5 h-5 text-muted-foreground" />
                                    <div>
                                        <p className="font-medium">Notifications</p>
                                        <p className="text-sm text-muted-foreground">Receive updates about orders</p>
                                    </div>
                                </div>
                                <Button variant="outline" size="sm">Manage</Button>
                            </div>
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="flex items-center space-x-4">
                                    <Shield className="w-5 h-5 text-muted-foreground" />
                                    <div>
                                        <p className="font-medium">Security</p>
                                        <p className="text-sm text-muted-foreground">Change password and 2FA</p>
                                    </div>
                                </div>
                                <Button variant="outline" size="sm">Manage</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Profile;
