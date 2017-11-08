var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ApiHeader;
(function (ApiHeader) {
    var SessionInventory = (function () {
        function SessionInventory() {
        }
        return SessionInventory;
    }());
    ApiHeader.SessionInventory = SessionInventory;
    var APISilentMsg = (function () {
        function APISilentMsg() {
        }
        APISilentMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.test.multinodes.APISilentMsg': this
            };
            return msg;
        };
        return APISilentMsg;
    }());
    ApiHeader.APISilentMsg = APISilentMsg;
    var FakePolicyAllowMsg = (function () {
        function FakePolicyAllowMsg() {
        }
        FakePolicyAllowMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.test.identity.FakePolicyAllowMsg': this
            };
            return msg;
        };
        return FakePolicyAllowMsg;
    }());
    ApiHeader.FakePolicyAllowMsg = FakePolicyAllowMsg;
    var FakePolicyDenyMsg = (function () {
        function FakePolicyDenyMsg() {
        }
        FakePolicyDenyMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.test.identity.FakePolicyDenyMsg': this
            };
            return msg;
        };
        return FakePolicyDenyMsg;
    }());
    ApiHeader.FakePolicyDenyMsg = FakePolicyDenyMsg;
    var FakePolicyAllowHas2RoleMsg = (function () {
        function FakePolicyAllowHas2RoleMsg() {
        }
        FakePolicyAllowHas2RoleMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.test.identity.FakePolicyAllowHas2RoleMsg': this
            };
            return msg;
        };
        return FakePolicyAllowHas2RoleMsg;
    }());
    ApiHeader.FakePolicyAllowHas2RoleMsg = FakePolicyAllowHas2RoleMsg;
    var QueryCondition = (function () {
        function QueryCondition() {
        }
        return QueryCondition;
    }());
    ApiHeader.QueryCondition = QueryCondition;
    var APIQueryGlobalConfigMsg = (function () {
        function APIQueryGlobalConfigMsg() {
        }
        APIQueryGlobalConfigMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.core.config.APIQueryGlobalConfigMsg': this
            };
            return msg;
        };
        return APIQueryGlobalConfigMsg;
    }());
    ApiHeader.APIQueryGlobalConfigMsg = APIQueryGlobalConfigMsg;
    var APIListGlobalConfigMsg = (function () {
        function APIListGlobalConfigMsg() {
        }
        APIListGlobalConfigMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.core.config.APIListGlobalConfigMsg': this
            };
            return msg;
        };
        return APIListGlobalConfigMsg;
    }());
    ApiHeader.APIListGlobalConfigMsg = APIListGlobalConfigMsg;
    var APIGetGlobalConfigMsg = (function () {
        function APIGetGlobalConfigMsg() {
        }
        APIGetGlobalConfigMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.core.config.APIGetGlobalConfigMsg': this
            };
            return msg;
        };
        return APIGetGlobalConfigMsg;
    }());
    ApiHeader.APIGetGlobalConfigMsg = APIGetGlobalConfigMsg;
    var APIUpdateGlobalConfigMsg = (function () {
        function APIUpdateGlobalConfigMsg() {
        }
        APIUpdateGlobalConfigMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.core.config.APIUpdateGlobalConfigMsg': this
            };
            return msg;
        };
        return APIUpdateGlobalConfigMsg;
    }());
    ApiHeader.APIUpdateGlobalConfigMsg = APIUpdateGlobalConfigMsg;
    var APIGenerateInventoryQueryDetailsMsg = (function () {
        function APIGenerateInventoryQueryDetailsMsg() {
        }
        APIGenerateInventoryQueryDetailsMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.query.APIGenerateInventoryQueryDetailsMsg': this
            };
            return msg;
        };
        return APIGenerateInventoryQueryDetailsMsg;
    }());
    ApiHeader.APIGenerateInventoryQueryDetailsMsg = APIGenerateInventoryQueryDetailsMsg;
    var APIGenerateQueryableFieldsMsg = (function () {
        function APIGenerateQueryableFieldsMsg() {
        }
        APIGenerateQueryableFieldsMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.query.APIGenerateQueryableFieldsMsg': this
            };
            return msg;
        };
        return APIGenerateQueryableFieldsMsg;
    }());
    ApiHeader.APIGenerateQueryableFieldsMsg = APIGenerateQueryableFieldsMsg;
    var APIGetHostAllocatorStrategiesMsg = (function () {
        function APIGetHostAllocatorStrategiesMsg() {
        }
        APIGetHostAllocatorStrategiesMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.allocator.APIGetHostAllocatorStrategiesMsg': this
            };
            return msg;
        };
        return APIGetHostAllocatorStrategiesMsg;
    }());
    ApiHeader.APIGetHostAllocatorStrategiesMsg = APIGetHostAllocatorStrategiesMsg;
    var APIGetCpuMemoryCapacityMsg = (function () {
        function APIGetCpuMemoryCapacityMsg() {
        }
        APIGetCpuMemoryCapacityMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.allocator.APIGetCpuMemoryCapacityMsg': this
            };
            return msg;
        };
        return APIGetCpuMemoryCapacityMsg;
    }());
    ApiHeader.APIGetCpuMemoryCapacityMsg = APIGetCpuMemoryCapacityMsg;
    var APIUpdateVmInstanceMsg = (function () {
        function APIUpdateVmInstanceMsg() {
        }
        APIUpdateVmInstanceMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIUpdateVmInstanceMsg': this
            };
            return msg;
        };
        return APIUpdateVmInstanceMsg;
    }());
    ApiHeader.APIUpdateVmInstanceMsg = APIUpdateVmInstanceMsg;
    var APIGetVmAttachableL3NetworkMsg = (function () {
        function APIGetVmAttachableL3NetworkMsg() {
        }
        APIGetVmAttachableL3NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIGetVmAttachableL3NetworkMsg': this
            };
            return msg;
        };
        return APIGetVmAttachableL3NetworkMsg;
    }());
    ApiHeader.APIGetVmAttachableL3NetworkMsg = APIGetVmAttachableL3NetworkMsg;
    var APIMigrateVmMsg = (function () {
        function APIMigrateVmMsg() {
        }
        APIMigrateVmMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIMigrateVmMsg': this
            };
            return msg;
        };
        return APIMigrateVmMsg;
    }());
    ApiHeader.APIMigrateVmMsg = APIMigrateVmMsg;
    var APIStopVmInstanceMsg = (function () {
        function APIStopVmInstanceMsg() {
        }
        APIStopVmInstanceMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIStopVmInstanceMsg': this
            };
            return msg;
        };
        return APIStopVmInstanceMsg;
    }());
    ApiHeader.APIStopVmInstanceMsg = APIStopVmInstanceMsg;
    var APIChangeInstanceOfferingMsg = (function () {
        function APIChangeInstanceOfferingMsg() {
        }
        APIChangeInstanceOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIChangeInstanceOfferingMsg': this
            };
            return msg;
        };
        return APIChangeInstanceOfferingMsg;
    }());
    ApiHeader.APIChangeInstanceOfferingMsg = APIChangeInstanceOfferingMsg;
    var NOVTriple = (function () {
        function NOVTriple() {
        }
        return NOVTriple;
    }());
    ApiHeader.NOVTriple = NOVTriple;
    var NOLTriple = (function () {
        function NOLTriple() {
        }
        return NOLTriple;
    }());
    ApiHeader.NOLTriple = NOLTriple;
    var APISearchVmInstanceMsg = (function () {
        function APISearchVmInstanceMsg() {
        }
        APISearchVmInstanceMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APISearchVmInstanceMsg': this
            };
            return msg;
        };
        return APISearchVmInstanceMsg;
    }());
    ApiHeader.APISearchVmInstanceMsg = APISearchVmInstanceMsg;
    var APIGetVmAttachableDataVolumeMsg = (function () {
        function APIGetVmAttachableDataVolumeMsg() {
        }
        APIGetVmAttachableDataVolumeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIGetVmAttachableDataVolumeMsg': this
            };
            return msg;
        };
        return APIGetVmAttachableDataVolumeMsg;
    }());
    ApiHeader.APIGetVmAttachableDataVolumeMsg = APIGetVmAttachableDataVolumeMsg;
    var APIQueryVmNicMsg = (function () {
        function APIQueryVmNicMsg() {
        }
        APIQueryVmNicMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIQueryVmNicMsg': this
            };
            return msg;
        };
        return APIQueryVmNicMsg;
    }());
    ApiHeader.APIQueryVmNicMsg = APIQueryVmNicMsg;
    var APIAttachL3NetworkToVmMsg = (function () {
        function APIAttachL3NetworkToVmMsg() {
        }
        APIAttachL3NetworkToVmMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIAttachL3NetworkToVmMsg': this
            };
            return msg;
        };
        return APIAttachL3NetworkToVmMsg;
    }());
    ApiHeader.APIAttachL3NetworkToVmMsg = APIAttachL3NetworkToVmMsg;
    var APIDestroyVmInstanceMsg = (function () {
        function APIDestroyVmInstanceMsg() {
        }
        APIDestroyVmInstanceMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIDestroyVmInstanceMsg': this
            };
            return msg;
        };
        return APIDestroyVmInstanceMsg;
    }());
    ApiHeader.APIDestroyVmInstanceMsg = APIDestroyVmInstanceMsg;
    var APIGetVmMigrationCandidateHostsMsg = (function () {
        function APIGetVmMigrationCandidateHostsMsg() {
        }
        APIGetVmMigrationCandidateHostsMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIGetVmMigrationCandidateHostsMsg': this
            };
            return msg;
        };
        return APIGetVmMigrationCandidateHostsMsg;
    }());
    ApiHeader.APIGetVmMigrationCandidateHostsMsg = APIGetVmMigrationCandidateHostsMsg;
    var APIQueryVmInstanceMsg = (function () {
        function APIQueryVmInstanceMsg() {
        }
        APIQueryVmInstanceMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIQueryVmInstanceMsg': this
            };
            return msg;
        };
        return APIQueryVmInstanceMsg;
    }());
    ApiHeader.APIQueryVmInstanceMsg = APIQueryVmInstanceMsg;
    var APIDetachL3NetworkFromVmMsg = (function () {
        function APIDetachL3NetworkFromVmMsg() {
        }
        APIDetachL3NetworkFromVmMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIDetachL3NetworkFromVmMsg': this
            };
            return msg;
        };
        return APIDetachL3NetworkFromVmMsg;
    }());
    ApiHeader.APIDetachL3NetworkFromVmMsg = APIDetachL3NetworkFromVmMsg;
    var APIListVmNicMsg = (function () {
        function APIListVmNicMsg() {
        }
        APIListVmNicMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIListVmNicMsg': this
            };
            return msg;
        };
        return APIListVmNicMsg;
    }());
    ApiHeader.APIListVmNicMsg = APIListVmNicMsg;
    var APIListVmInstanceMsg = (function () {
        function APIListVmInstanceMsg() {
        }
        APIListVmInstanceMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIListVmInstanceMsg': this
            };
            return msg;
        };
        return APIListVmInstanceMsg;
    }());
    ApiHeader.APIListVmInstanceMsg = APIListVmInstanceMsg;
    var APIRebootVmInstanceMsg = (function () {
        function APIRebootVmInstanceMsg() {
        }
        APIRebootVmInstanceMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIRebootVmInstanceMsg': this
            };
            return msg;
        };
        return APIRebootVmInstanceMsg;
    }());
    ApiHeader.APIRebootVmInstanceMsg = APIRebootVmInstanceMsg;
    var APICreateVmInstanceMsg = (function () {
        function APICreateVmInstanceMsg() {
        }
        APICreateVmInstanceMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APICreateVmInstanceMsg': this
            };
            return msg;
        };
        return APICreateVmInstanceMsg;
    }());
    ApiHeader.APICreateVmInstanceMsg = APICreateVmInstanceMsg;
    var APIGetVmInstanceMsg = (function () {
        function APIGetVmInstanceMsg() {
        }
        APIGetVmInstanceMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIGetVmInstanceMsg': this
            };
            return msg;
        };
        return APIGetVmInstanceMsg;
    }());
    ApiHeader.APIGetVmInstanceMsg = APIGetVmInstanceMsg;
    var APIStartVmInstanceMsg = (function () {
        function APIStartVmInstanceMsg() {
        }
        APIStartVmInstanceMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIStartVmInstanceMsg': this
            };
            return msg;
        };
        return APIStartVmInstanceMsg;
    }());
    ApiHeader.APIStartVmInstanceMsg = APIStartVmInstanceMsg;
    var APIChangeImageStateMsg = (function () {
        function APIChangeImageStateMsg() {
        }
        APIChangeImageStateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.image.APIChangeImageStateMsg': this
            };
            return msg;
        };
        return APIChangeImageStateMsg;
    }());
    ApiHeader.APIChangeImageStateMsg = APIChangeImageStateMsg;
    var APIGetImageMsg = (function () {
        function APIGetImageMsg() {
        }
        APIGetImageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.image.APIGetImageMsg': this
            };
            return msg;
        };
        return APIGetImageMsg;
    }());
    ApiHeader.APIGetImageMsg = APIGetImageMsg;
    var APIUpdateImageMsg = (function () {
        function APIUpdateImageMsg() {
        }
        APIUpdateImageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.image.APIUpdateImageMsg': this
            };
            return msg;
        };
        return APIUpdateImageMsg;
    }());
    ApiHeader.APIUpdateImageMsg = APIUpdateImageMsg;
    var APIDeleteImageMsg = (function () {
        function APIDeleteImageMsg() {
        }
        APIDeleteImageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.image.APIDeleteImageMsg': this
            };
            return msg;
        };
        return APIDeleteImageMsg;
    }());
    ApiHeader.APIDeleteImageMsg = APIDeleteImageMsg;
    var APISearchImageMsg = (function () {
        function APISearchImageMsg() {
        }
        APISearchImageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.image.APISearchImageMsg': this
            };
            return msg;
        };
        return APISearchImageMsg;
    }());
    ApiHeader.APISearchImageMsg = APISearchImageMsg;
    var APICreateDataVolumeTemplateFromVolumeMsg = (function () {
        function APICreateDataVolumeTemplateFromVolumeMsg() {
        }
        APICreateDataVolumeTemplateFromVolumeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.image.APICreateDataVolumeTemplateFromVolumeMsg': this
            };
            return msg;
        };
        return APICreateDataVolumeTemplateFromVolumeMsg;
    }());
    ApiHeader.APICreateDataVolumeTemplateFromVolumeMsg = APICreateDataVolumeTemplateFromVolumeMsg;
    var APICreateRootVolumeTemplateFromRootVolumeMsg = (function () {
        function APICreateRootVolumeTemplateFromRootVolumeMsg() {
        }
        APICreateRootVolumeTemplateFromRootVolumeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.image.APICreateRootVolumeTemplateFromRootVolumeMsg': this
            };
            return msg;
        };
        return APICreateRootVolumeTemplateFromRootVolumeMsg;
    }());
    ApiHeader.APICreateRootVolumeTemplateFromRootVolumeMsg = APICreateRootVolumeTemplateFromRootVolumeMsg;
    var APIQueryImageMsg = (function () {
        function APIQueryImageMsg() {
        }
        APIQueryImageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.image.APIQueryImageMsg': this
            };
            return msg;
        };
        return APIQueryImageMsg;
    }());
    ApiHeader.APIQueryImageMsg = APIQueryImageMsg;
    var APIListImageMsg = (function () {
        function APIListImageMsg() {
        }
        APIListImageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.image.APIListImageMsg': this
            };
            return msg;
        };
        return APIListImageMsg;
    }());
    ApiHeader.APIListImageMsg = APIListImageMsg;
    var APICreateRootVolumeTemplateFromVolumeSnapshotMsg = (function () {
        function APICreateRootVolumeTemplateFromVolumeSnapshotMsg() {
        }
        APICreateRootVolumeTemplateFromVolumeSnapshotMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.image.APICreateRootVolumeTemplateFromVolumeSnapshotMsg': this
            };
            return msg;
        };
        return APICreateRootVolumeTemplateFromVolumeSnapshotMsg;
    }());
    ApiHeader.APICreateRootVolumeTemplateFromVolumeSnapshotMsg = APICreateRootVolumeTemplateFromVolumeSnapshotMsg;
    var APIAddImageMsg = (function () {
        function APIAddImageMsg() {
        }
        APIAddImageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.image.APIAddImageMsg': this
            };
            return msg;
        };
        return APIAddImageMsg;
    }());
    ApiHeader.APIAddImageMsg = APIAddImageMsg;
    var APIRequestConsoleAccessMsg = (function () {
        function APIRequestConsoleAccessMsg() {
        }
        APIRequestConsoleAccessMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.console.APIRequestConsoleAccessMsg': this
            };
            return msg;
        };
        return APIRequestConsoleAccessMsg;
    }());
    ApiHeader.APIRequestConsoleAccessMsg = APIRequestConsoleAccessMsg;
    var APIBackupDataVolumeMsg = (function () {
        function APIBackupDataVolumeMsg() {
        }
        APIBackupDataVolumeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APIBackupDataVolumeMsg': this
            };
            return msg;
        };
        return APIBackupDataVolumeMsg;
    }());
    ApiHeader.APIBackupDataVolumeMsg = APIBackupDataVolumeMsg;
    var APIAttachDataVolumeToVmMsg = (function () {
        function APIAttachDataVolumeToVmMsg() {
        }
        APIAttachDataVolumeToVmMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APIAttachDataVolumeToVmMsg': this
            };
            return msg;
        };
        return APIAttachDataVolumeToVmMsg;
    }());
    ApiHeader.APIAttachDataVolumeToVmMsg = APIAttachDataVolumeToVmMsg;
    var APISearchVolumeMsg = (function () {
        function APISearchVolumeMsg() {
        }
        APISearchVolumeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APISearchVolumeMsg': this
            };
            return msg;
        };
        return APISearchVolumeMsg;
    }());
    ApiHeader.APISearchVolumeMsg = APISearchVolumeMsg;
    var APIUpdateVolumeMsg = (function () {
        function APIUpdateVolumeMsg() {
        }
        APIUpdateVolumeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APIUpdateVolumeMsg': this
            };
            return msg;
        };
        return APIUpdateVolumeMsg;
    }());
    ApiHeader.APIUpdateVolumeMsg = APIUpdateVolumeMsg;
    var APIQueryVolumeMsg = (function () {
        function APIQueryVolumeMsg() {
        }
        APIQueryVolumeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APIQueryVolumeMsg': this
            };
            return msg;
        };
        return APIQueryVolumeMsg;
    }());
    ApiHeader.APIQueryVolumeMsg = APIQueryVolumeMsg;
    var APICreateDataVolumeFromVolumeSnapshotMsg = (function () {
        function APICreateDataVolumeFromVolumeSnapshotMsg() {
        }
        APICreateDataVolumeFromVolumeSnapshotMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APICreateDataVolumeFromVolumeSnapshotMsg': this
            };
            return msg;
        };
        return APICreateDataVolumeFromVolumeSnapshotMsg;
    }());
    ApiHeader.APICreateDataVolumeFromVolumeSnapshotMsg = APICreateDataVolumeFromVolumeSnapshotMsg;
    var APICreateDataVolumeFromVolumeTemplateMsg = (function () {
        function APICreateDataVolumeFromVolumeTemplateMsg() {
        }
        APICreateDataVolumeFromVolumeTemplateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APICreateDataVolumeFromVolumeTemplateMsg': this
            };
            return msg;
        };
        return APICreateDataVolumeFromVolumeTemplateMsg;
    }());
    ApiHeader.APICreateDataVolumeFromVolumeTemplateMsg = APICreateDataVolumeFromVolumeTemplateMsg;
    var APIDetachDataVolumeFromVmMsg = (function () {
        function APIDetachDataVolumeFromVmMsg() {
        }
        APIDetachDataVolumeFromVmMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APIDetachDataVolumeFromVmMsg': this
            };
            return msg;
        };
        return APIDetachDataVolumeFromVmMsg;
    }());
    ApiHeader.APIDetachDataVolumeFromVmMsg = APIDetachDataVolumeFromVmMsg;
    var APIGetVolumeMsg = (function () {
        function APIGetVolumeMsg() {
        }
        APIGetVolumeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APIGetVolumeMsg': this
            };
            return msg;
        };
        return APIGetVolumeMsg;
    }());
    ApiHeader.APIGetVolumeMsg = APIGetVolumeMsg;
    var APICreateDataVolumeMsg = (function () {
        function APICreateDataVolumeMsg() {
        }
        APICreateDataVolumeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APICreateDataVolumeMsg': this
            };
            return msg;
        };
        return APICreateDataVolumeMsg;
    }());
    ApiHeader.APICreateDataVolumeMsg = APICreateDataVolumeMsg;
    var APIGetDataVolumeAttachableVmMsg = (function () {
        function APIGetDataVolumeAttachableVmMsg() {
        }
        APIGetDataVolumeAttachableVmMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APIGetDataVolumeAttachableVmMsg': this
            };
            return msg;
        };
        return APIGetDataVolumeAttachableVmMsg;
    }());
    ApiHeader.APIGetDataVolumeAttachableVmMsg = APIGetDataVolumeAttachableVmMsg;
    var APIGetVolumeFormatMsg = (function () {
        function APIGetVolumeFormatMsg() {
        }
        APIGetVolumeFormatMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APIGetVolumeFormatMsg': this
            };
            return msg;
        };
        return APIGetVolumeFormatMsg;
    }());
    ApiHeader.APIGetVolumeFormatMsg = APIGetVolumeFormatMsg;
    var APIDeleteDataVolumeMsg = (function () {
        function APIDeleteDataVolumeMsg() {
        }
        APIDeleteDataVolumeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APIDeleteDataVolumeMsg': this
            };
            return msg;
        };
        return APIDeleteDataVolumeMsg;
    }());
    ApiHeader.APIDeleteDataVolumeMsg = APIDeleteDataVolumeMsg;
    var APICreateVolumeSnapshotMsg = (function () {
        function APICreateVolumeSnapshotMsg() {
        }
        APICreateVolumeSnapshotMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APICreateVolumeSnapshotMsg': this
            };
            return msg;
        };
        return APICreateVolumeSnapshotMsg;
    }());
    ApiHeader.APICreateVolumeSnapshotMsg = APICreateVolumeSnapshotMsg;
    var APIListVolumeMsg = (function () {
        function APIListVolumeMsg() {
        }
        APIListVolumeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APIListVolumeMsg': this
            };
            return msg;
        };
        return APIListVolumeMsg;
    }());
    ApiHeader.APIListVolumeMsg = APIListVolumeMsg;
    var APIChangeVolumeStateMsg = (function () {
        function APIChangeVolumeStateMsg() {
        }
        APIChangeVolumeStateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APIChangeVolumeStateMsg': this
            };
            return msg;
        };
        return APIChangeVolumeStateMsg;
    }());
    ApiHeader.APIChangeVolumeStateMsg = APIChangeVolumeStateMsg;
    var APIIsReadyToGoMsg = (function () {
        function APIIsReadyToGoMsg() {
        }
        APIIsReadyToGoMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.apimediator.APIIsReadyToGoMsg': this
            };
            return msg;
        };
        return APIIsReadyToGoMsg;
    }());
    ApiHeader.APIIsReadyToGoMsg = APIIsReadyToGoMsg;
    var APIListDiskOfferingMsg = (function () {
        function APIListDiskOfferingMsg() {
        }
        APIListDiskOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIListDiskOfferingMsg': this
            };
            return msg;
        };
        return APIListDiskOfferingMsg;
    }());
    ApiHeader.APIListDiskOfferingMsg = APIListDiskOfferingMsg;
    var APIGenerateApiTypeScriptDefinitionMsg = (function () {
        function APIGenerateApiTypeScriptDefinitionMsg() {
        }
        APIGenerateApiTypeScriptDefinitionMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIGenerateApiTypeScriptDefinitionMsg': this
            };
            return msg;
        };
        return APIGenerateApiTypeScriptDefinitionMsg;
    }());
    ApiHeader.APIGenerateApiTypeScriptDefinitionMsg = APIGenerateApiTypeScriptDefinitionMsg;
    var APIDeleteDiskOfferingMsg = (function () {
        function APIDeleteDiskOfferingMsg() {
        }
        APIDeleteDiskOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIDeleteDiskOfferingMsg': this
            };
            return msg;
        };
        return APIDeleteDiskOfferingMsg;
    }());
    ApiHeader.APIDeleteDiskOfferingMsg = APIDeleteDiskOfferingMsg;
    var APIGenerateGroovyClassMsg = (function () {
        function APIGenerateGroovyClassMsg() {
        }
        APIGenerateGroovyClassMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIGenerateGroovyClassMsg': this
            };
            return msg;
        };
        return APIGenerateGroovyClassMsg;
    }());
    ApiHeader.APIGenerateGroovyClassMsg = APIGenerateGroovyClassMsg;
    var APIQueryInstanceOfferingMsg = (function () {
        function APIQueryInstanceOfferingMsg() {
        }
        APIQueryInstanceOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIQueryInstanceOfferingMsg': this
            };
            return msg;
        };
        return APIQueryInstanceOfferingMsg;
    }());
    ApiHeader.APIQueryInstanceOfferingMsg = APIQueryInstanceOfferingMsg;
    var APIUpdateInstanceOfferingMsg = (function () {
        function APIUpdateInstanceOfferingMsg() {
        }
        APIUpdateInstanceOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIUpdateInstanceOfferingMsg': this
            };
            return msg;
        };
        return APIUpdateInstanceOfferingMsg;
    }());
    ApiHeader.APIUpdateInstanceOfferingMsg = APIUpdateInstanceOfferingMsg;
    var APICreateInstanceOfferingMsg = (function () {
        function APICreateInstanceOfferingMsg() {
        }
        APICreateInstanceOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APICreateInstanceOfferingMsg': this
            };
            return msg;
        };
        return APICreateInstanceOfferingMsg;
    }());
    ApiHeader.APICreateInstanceOfferingMsg = APICreateInstanceOfferingMsg;
    var APIGenerateApiJsonTemplateMsg = (function () {
        function APIGenerateApiJsonTemplateMsg() {
        }
        APIGenerateApiJsonTemplateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIGenerateApiJsonTemplateMsg': this
            };
            return msg;
        };
        return APIGenerateApiJsonTemplateMsg;
    }());
    ApiHeader.APIGenerateApiJsonTemplateMsg = APIGenerateApiJsonTemplateMsg;
    var APICreateDiskOfferingMsg = (function () {
        function APICreateDiskOfferingMsg() {
        }
        APICreateDiskOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APICreateDiskOfferingMsg': this
            };
            return msg;
        };
        return APICreateDiskOfferingMsg;
    }());
    ApiHeader.APICreateDiskOfferingMsg = APICreateDiskOfferingMsg;
    var APIGetInstanceOfferingMsg = (function () {
        function APIGetInstanceOfferingMsg() {
        }
        APIGetInstanceOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIGetInstanceOfferingMsg': this
            };
            return msg;
        };
        return APIGetInstanceOfferingMsg;
    }());
    ApiHeader.APIGetInstanceOfferingMsg = APIGetInstanceOfferingMsg;
    var APIListInstanceOfferingMsg = (function () {
        function APIListInstanceOfferingMsg() {
        }
        APIListInstanceOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIListInstanceOfferingMsg': this
            };
            return msg;
        };
        return APIListInstanceOfferingMsg;
    }());
    ApiHeader.APIListInstanceOfferingMsg = APIListInstanceOfferingMsg;
    var APISearchDnsMsg = (function () {
        function APISearchDnsMsg() {
        }
        APISearchDnsMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APISearchDnsMsg': this
            };
            return msg;
        };
        return APISearchDnsMsg;
    }());
    ApiHeader.APISearchDnsMsg = APISearchDnsMsg;
    var APISearchDiskOfferingMsg = (function () {
        function APISearchDiskOfferingMsg() {
        }
        APISearchDiskOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APISearchDiskOfferingMsg': this
            };
            return msg;
        };
        return APISearchDiskOfferingMsg;
    }());
    ApiHeader.APISearchDiskOfferingMsg = APISearchDiskOfferingMsg;
    var APIDeleteInstanceOfferingMsg = (function () {
        function APIDeleteInstanceOfferingMsg() {
        }
        APIDeleteInstanceOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIDeleteInstanceOfferingMsg': this
            };
            return msg;
        };
        return APIDeleteInstanceOfferingMsg;
    }());
    ApiHeader.APIDeleteInstanceOfferingMsg = APIDeleteInstanceOfferingMsg;
    var APIGenerateSqlVOViewMsg = (function () {
        function APIGenerateSqlVOViewMsg() {
        }
        APIGenerateSqlVOViewMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIGenerateSqlVOViewMsg': this
            };
            return msg;
        };
        return APIGenerateSqlVOViewMsg;
    }());
    ApiHeader.APIGenerateSqlVOViewMsg = APIGenerateSqlVOViewMsg;
    var APIGenerateTestLinkDocumentMsg = (function () {
        function APIGenerateTestLinkDocumentMsg() {
        }
        APIGenerateTestLinkDocumentMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIGenerateTestLinkDocumentMsg': this
            };
            return msg;
        };
        return APIGenerateTestLinkDocumentMsg;
    }());
    ApiHeader.APIGenerateTestLinkDocumentMsg = APIGenerateTestLinkDocumentMsg;
    var APIGetGlobalPropertyMsg = (function () {
        function APIGetGlobalPropertyMsg() {
        }
        APIGetGlobalPropertyMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIGetGlobalPropertyMsg': this
            };
            return msg;
        };
        return APIGetGlobalPropertyMsg;
    }());
    ApiHeader.APIGetGlobalPropertyMsg = APIGetGlobalPropertyMsg;
    var APIChangeInstanceOfferingStateMsg = (function () {
        function APIChangeInstanceOfferingStateMsg() {
        }
        APIChangeInstanceOfferingStateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIChangeInstanceOfferingStateMsg': this
            };
            return msg;
        };
        return APIChangeInstanceOfferingStateMsg;
    }());
    ApiHeader.APIChangeInstanceOfferingStateMsg = APIChangeInstanceOfferingStateMsg;
    var APIGenerateSqlIndexMsg = (function () {
        function APIGenerateSqlIndexMsg() {
        }
        APIGenerateSqlIndexMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIGenerateSqlIndexMsg': this
            };
            return msg;
        };
        return APIGenerateSqlIndexMsg;
    }());
    ApiHeader.APIGenerateSqlIndexMsg = APIGenerateSqlIndexMsg;
    var APIQueryDiskOfferingMsg = (function () {
        function APIQueryDiskOfferingMsg() {
        }
        APIQueryDiskOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIQueryDiskOfferingMsg': this
            };
            return msg;
        };
        return APIQueryDiskOfferingMsg;
    }());
    ApiHeader.APIQueryDiskOfferingMsg = APIQueryDiskOfferingMsg;
    var APIGetDiskOfferingMsg = (function () {
        function APIGetDiskOfferingMsg() {
        }
        APIGetDiskOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIGetDiskOfferingMsg': this
            };
            return msg;
        };
        return APIGetDiskOfferingMsg;
    }());
    ApiHeader.APIGetDiskOfferingMsg = APIGetDiskOfferingMsg;
    var APIGenerateSqlForeignKeyMsg = (function () {
        function APIGenerateSqlForeignKeyMsg() {
        }
        APIGenerateSqlForeignKeyMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIGenerateSqlForeignKeyMsg': this
            };
            return msg;
        };
        return APIGenerateSqlForeignKeyMsg;
    }());
    ApiHeader.APIGenerateSqlForeignKeyMsg = APIGenerateSqlForeignKeyMsg;
    var APIUpdateDiskOfferingMsg = (function () {
        function APIUpdateDiskOfferingMsg() {
        }
        APIUpdateDiskOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIUpdateDiskOfferingMsg': this
            };
            return msg;
        };
        return APIUpdateDiskOfferingMsg;
    }());
    ApiHeader.APIUpdateDiskOfferingMsg = APIUpdateDiskOfferingMsg;
    var APIChangeDiskOfferingStateMsg = (function () {
        function APIChangeDiskOfferingStateMsg() {
        }
        APIChangeDiskOfferingStateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APIChangeDiskOfferingStateMsg': this
            };
            return msg;
        };
        return APIChangeDiskOfferingStateMsg;
    }());
    ApiHeader.APIChangeDiskOfferingStateMsg = APIChangeDiskOfferingStateMsg;
    var APISearchInstanceOfferingMsg = (function () {
        function APISearchInstanceOfferingMsg() {
        }
        APISearchInstanceOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.configuration.APISearchInstanceOfferingMsg': this
            };
            return msg;
        };
        return APISearchInstanceOfferingMsg;
    }());
    ApiHeader.APISearchInstanceOfferingMsg = APISearchInstanceOfferingMsg;
    var APISearchPrimaryStorageMsg = (function () {
        function APISearchPrimaryStorageMsg() {
        }
        APISearchPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.primary.APISearchPrimaryStorageMsg': this
            };
            return msg;
        };
        return APISearchPrimaryStorageMsg;
    }());
    ApiHeader.APISearchPrimaryStorageMsg = APISearchPrimaryStorageMsg;
    var APIGetPrimaryStorageTypesMsg = (function () {
        function APIGetPrimaryStorageTypesMsg() {
        }
        APIGetPrimaryStorageTypesMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.primary.APIGetPrimaryStorageTypesMsg': this
            };
            return msg;
        };
        return APIGetPrimaryStorageTypesMsg;
    }());
    ApiHeader.APIGetPrimaryStorageTypesMsg = APIGetPrimaryStorageTypesMsg;
    var APIAttachPrimaryStorageToClusterMsg = (function () {
        function APIAttachPrimaryStorageToClusterMsg() {
        }
        APIAttachPrimaryStorageToClusterMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.primary.APIAttachPrimaryStorageToClusterMsg': this
            };
            return msg;
        };
        return APIAttachPrimaryStorageToClusterMsg;
    }());
    ApiHeader.APIAttachPrimaryStorageToClusterMsg = APIAttachPrimaryStorageToClusterMsg;
    var APIListPrimaryStorageMsg = (function () {
        function APIListPrimaryStorageMsg() {
        }
        APIListPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.primary.APIListPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIListPrimaryStorageMsg;
    }());
    ApiHeader.APIListPrimaryStorageMsg = APIListPrimaryStorageMsg;
    var APIGetPrimaryStorageCapacityMsg = (function () {
        function APIGetPrimaryStorageCapacityMsg() {
        }
        APIGetPrimaryStorageCapacityMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.primary.APIGetPrimaryStorageCapacityMsg': this
            };
            return msg;
        };
        return APIGetPrimaryStorageCapacityMsg;
    }());
    ApiHeader.APIGetPrimaryStorageCapacityMsg = APIGetPrimaryStorageCapacityMsg;
    var APIUpdatePrimaryStorageMsg = (function () {
        function APIUpdatePrimaryStorageMsg() {
        }
        APIUpdatePrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.primary.APIUpdatePrimaryStorageMsg': this
            };
            return msg;
        };
        return APIUpdatePrimaryStorageMsg;
    }());
    ApiHeader.APIUpdatePrimaryStorageMsg = APIUpdatePrimaryStorageMsg;
    var APIGetPrimaryStorageMsg = (function () {
        function APIGetPrimaryStorageMsg() {
        }
        APIGetPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.primary.APIGetPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIGetPrimaryStorageMsg;
    }());
    ApiHeader.APIGetPrimaryStorageMsg = APIGetPrimaryStorageMsg;
    var APIQueryPrimaryStorageMsg = (function () {
        function APIQueryPrimaryStorageMsg() {
        }
        APIQueryPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.primary.APIQueryPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIQueryPrimaryStorageMsg;
    }());
    ApiHeader.APIQueryPrimaryStorageMsg = APIQueryPrimaryStorageMsg;
    var APIChangePrimaryStorageStateMsg = (function () {
        function APIChangePrimaryStorageStateMsg() {
        }
        APIChangePrimaryStorageStateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.primary.APIChangePrimaryStorageStateMsg': this
            };
            return msg;
        };
        return APIChangePrimaryStorageStateMsg;
    }());
    ApiHeader.APIChangePrimaryStorageStateMsg = APIChangePrimaryStorageStateMsg;
    var APISyncPrimaryStorageCapacityMsg = (function () {
        function APISyncPrimaryStorageCapacityMsg() {
        }
        APISyncPrimaryStorageCapacityMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.primary.APISyncPrimaryStorageCapacityMsg': this
            };
            return msg;
        };
        return APISyncPrimaryStorageCapacityMsg;
    }());
    ApiHeader.APISyncPrimaryStorageCapacityMsg = APISyncPrimaryStorageCapacityMsg;
    var APIDeletePrimaryStorageMsg = (function () {
        function APIDeletePrimaryStorageMsg() {
        }
        APIDeletePrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.primary.APIDeletePrimaryStorageMsg': this
            };
            return msg;
        };
        return APIDeletePrimaryStorageMsg;
    }());
    ApiHeader.APIDeletePrimaryStorageMsg = APIDeletePrimaryStorageMsg;
    var APIReconnectPrimaryStorageMsg = (function () {
        function APIReconnectPrimaryStorageMsg() {
        }
        APIReconnectPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.primary.APIReconnectPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIReconnectPrimaryStorageMsg;
    }());
    ApiHeader.APIReconnectPrimaryStorageMsg = APIReconnectPrimaryStorageMsg;
    var APIDetachPrimaryStorageFromClusterMsg = (function () {
        function APIDetachPrimaryStorageFromClusterMsg() {
        }
        APIDetachPrimaryStorageFromClusterMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.primary.APIDetachPrimaryStorageFromClusterMsg': this
            };
            return msg;
        };
        return APIDetachPrimaryStorageFromClusterMsg;
    }());
    ApiHeader.APIDetachPrimaryStorageFromClusterMsg = APIDetachPrimaryStorageFromClusterMsg;
    var APIGetPrimaryStorageAllocatorStrategiesMsg = (function () {
        function APIGetPrimaryStorageAllocatorStrategiesMsg() {
        }
        APIGetPrimaryStorageAllocatorStrategiesMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.primary.APIGetPrimaryStorageAllocatorStrategiesMsg': this
            };
            return msg;
        };
        return APIGetPrimaryStorageAllocatorStrategiesMsg;
    }());
    ApiHeader.APIGetPrimaryStorageAllocatorStrategiesMsg = APIGetPrimaryStorageAllocatorStrategiesMsg;
    var APIQueryVolumeSnapshotTreeMsg = (function () {
        function APIQueryVolumeSnapshotTreeMsg() {
        }
        APIQueryVolumeSnapshotTreeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.snapshot.APIQueryVolumeSnapshotTreeMsg': this
            };
            return msg;
        };
        return APIQueryVolumeSnapshotTreeMsg;
    }());
    ApiHeader.APIQueryVolumeSnapshotTreeMsg = APIQueryVolumeSnapshotTreeMsg;
    var APIDeleteVolumeSnapshotMsg = (function () {
        function APIDeleteVolumeSnapshotMsg() {
        }
        APIDeleteVolumeSnapshotMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.snapshot.APIDeleteVolumeSnapshotMsg': this
            };
            return msg;
        };
        return APIDeleteVolumeSnapshotMsg;
    }());
    ApiHeader.APIDeleteVolumeSnapshotMsg = APIDeleteVolumeSnapshotMsg;
    var APIUpdateVolumeSnapshotMsg = (function () {
        function APIUpdateVolumeSnapshotMsg() {
        }
        APIUpdateVolumeSnapshotMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.snapshot.APIUpdateVolumeSnapshotMsg': this
            };
            return msg;
        };
        return APIUpdateVolumeSnapshotMsg;
    }());
    ApiHeader.APIUpdateVolumeSnapshotMsg = APIUpdateVolumeSnapshotMsg;
    var APIDeleteVolumeSnapshotFromBackupStorageMsg = (function () {
        function APIDeleteVolumeSnapshotFromBackupStorageMsg() {
        }
        APIDeleteVolumeSnapshotFromBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.snapshot.APIDeleteVolumeSnapshotFromBackupStorageMsg': this
            };
            return msg;
        };
        return APIDeleteVolumeSnapshotFromBackupStorageMsg;
    }());
    ApiHeader.APIDeleteVolumeSnapshotFromBackupStorageMsg = APIDeleteVolumeSnapshotFromBackupStorageMsg;
    var APIQueryVolumeSnapshotMsg = (function () {
        function APIQueryVolumeSnapshotMsg() {
        }
        APIQueryVolumeSnapshotMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.snapshot.APIQueryVolumeSnapshotMsg': this
            };
            return msg;
        };
        return APIQueryVolumeSnapshotMsg;
    }());
    ApiHeader.APIQueryVolumeSnapshotMsg = APIQueryVolumeSnapshotMsg;
    var APIRevertVolumeFromSnapshotMsg = (function () {
        function APIRevertVolumeFromSnapshotMsg() {
        }
        APIRevertVolumeFromSnapshotMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.snapshot.APIRevertVolumeFromSnapshotMsg': this
            };
            return msg;
        };
        return APIRevertVolumeFromSnapshotMsg;
    }());
    ApiHeader.APIRevertVolumeFromSnapshotMsg = APIRevertVolumeFromSnapshotMsg;
    var APIBackupVolumeSnapshotMsg = (function () {
        function APIBackupVolumeSnapshotMsg() {
        }
        APIBackupVolumeSnapshotMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.snapshot.APIBackupVolumeSnapshotMsg': this
            };
            return msg;
        };
        return APIBackupVolumeSnapshotMsg;
    }());
    ApiHeader.APIBackupVolumeSnapshotMsg = APIBackupVolumeSnapshotMsg;
    var APIGetVolumeSnapshotTreeMsg = (function () {
        function APIGetVolumeSnapshotTreeMsg() {
        }
        APIGetVolumeSnapshotTreeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.snapshot.APIGetVolumeSnapshotTreeMsg': this
            };
            return msg;
        };
        return APIGetVolumeSnapshotTreeMsg;
    }());
    ApiHeader.APIGetVolumeSnapshotTreeMsg = APIGetVolumeSnapshotTreeMsg;
    var APIQueryBackupStorageMsg = (function () {
        function APIQueryBackupStorageMsg() {
        }
        APIQueryBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.backup.APIQueryBackupStorageMsg': this
            };
            return msg;
        };
        return APIQueryBackupStorageMsg;
    }());
    ApiHeader.APIQueryBackupStorageMsg = APIQueryBackupStorageMsg;
    var APIListBackupStorageMsg = (function () {
        function APIListBackupStorageMsg() {
        }
        APIListBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.backup.APIListBackupStorageMsg': this
            };
            return msg;
        };
        return APIListBackupStorageMsg;
    }());
    ApiHeader.APIListBackupStorageMsg = APIListBackupStorageMsg;
    var APIAttachBackupStorageToZoneMsg = (function () {
        function APIAttachBackupStorageToZoneMsg() {
        }
        APIAttachBackupStorageToZoneMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.backup.APIAttachBackupStorageToZoneMsg': this
            };
            return msg;
        };
        return APIAttachBackupStorageToZoneMsg;
    }());
    ApiHeader.APIAttachBackupStorageToZoneMsg = APIAttachBackupStorageToZoneMsg;
    var APISearchBackupStorageMsg = (function () {
        function APISearchBackupStorageMsg() {
        }
        APISearchBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.backup.APISearchBackupStorageMsg': this
            };
            return msg;
        };
        return APISearchBackupStorageMsg;
    }());
    ApiHeader.APISearchBackupStorageMsg = APISearchBackupStorageMsg;
    var APIGetBackupStorageMsg = (function () {
        function APIGetBackupStorageMsg() {
        }
        APIGetBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.backup.APIGetBackupStorageMsg': this
            };
            return msg;
        };
        return APIGetBackupStorageMsg;
    }());
    ApiHeader.APIGetBackupStorageMsg = APIGetBackupStorageMsg;
    var APIGetBackupStorageTypesMsg = (function () {
        function APIGetBackupStorageTypesMsg() {
        }
        APIGetBackupStorageTypesMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.backup.APIGetBackupStorageTypesMsg': this
            };
            return msg;
        };
        return APIGetBackupStorageTypesMsg;
    }());
    ApiHeader.APIGetBackupStorageTypesMsg = APIGetBackupStorageTypesMsg;
    var APIChangeBackupStorageStateMsg = (function () {
        function APIChangeBackupStorageStateMsg() {
        }
        APIChangeBackupStorageStateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.backup.APIChangeBackupStorageStateMsg': this
            };
            return msg;
        };
        return APIChangeBackupStorageStateMsg;
    }());
    ApiHeader.APIChangeBackupStorageStateMsg = APIChangeBackupStorageStateMsg;
    var APIScanBackupStorageMsg = (function () {
        function APIScanBackupStorageMsg() {
        }
        APIScanBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.backup.APIScanBackupStorageMsg': this
            };
            return msg;
        };
        return APIScanBackupStorageMsg;
    }());
    ApiHeader.APIScanBackupStorageMsg = APIScanBackupStorageMsg;
    var APIGetBackupStorageCapacityMsg = (function () {
        function APIGetBackupStorageCapacityMsg() {
        }
        APIGetBackupStorageCapacityMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.backup.APIGetBackupStorageCapacityMsg': this
            };
            return msg;
        };
        return APIGetBackupStorageCapacityMsg;
    }());
    ApiHeader.APIGetBackupStorageCapacityMsg = APIGetBackupStorageCapacityMsg;
    var APIDetachBackupStorageFromZoneMsg = (function () {
        function APIDetachBackupStorageFromZoneMsg() {
        }
        APIDetachBackupStorageFromZoneMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.backup.APIDetachBackupStorageFromZoneMsg': this
            };
            return msg;
        };
        return APIDetachBackupStorageFromZoneMsg;
    }());
    ApiHeader.APIDetachBackupStorageFromZoneMsg = APIDetachBackupStorageFromZoneMsg;
    var APIUpdateBackupStorageMsg = (function () {
        function APIUpdateBackupStorageMsg() {
        }
        APIUpdateBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.backup.APIUpdateBackupStorageMsg': this
            };
            return msg;
        };
        return APIUpdateBackupStorageMsg;
    }());
    ApiHeader.APIUpdateBackupStorageMsg = APIUpdateBackupStorageMsg;
    var APIDeleteBackupStorageMsg = (function () {
        function APIDeleteBackupStorageMsg() {
        }
        APIDeleteBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.storage.backup.APIDeleteBackupStorageMsg': this
            };
            return msg;
        };
        return APIDeleteBackupStorageMsg;
    }());
    ApiHeader.APIDeleteBackupStorageMsg = APIDeleteBackupStorageMsg;
    var APIListL3NetworkMsg = (function () {
        function APIListL3NetworkMsg() {
        }
        APIListL3NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIListL3NetworkMsg': this
            };
            return msg;
        };
        return APIListL3NetworkMsg;
    }());
    ApiHeader.APIListL3NetworkMsg = APIListL3NetworkMsg;
    var APIAddDnsToL3NetworkMsg = (function () {
        function APIAddDnsToL3NetworkMsg() {
        }
        APIAddDnsToL3NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIAddDnsToL3NetworkMsg': this
            };
            return msg;
        };
        return APIAddDnsToL3NetworkMsg;
    }());
    ApiHeader.APIAddDnsToL3NetworkMsg = APIAddDnsToL3NetworkMsg;
    var APICreateL3NetworkMsg = (function () {
        function APICreateL3NetworkMsg() {
        }
        APICreateL3NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APICreateL3NetworkMsg': this
            };
            return msg;
        };
        return APICreateL3NetworkMsg;
    }());
    ApiHeader.APICreateL3NetworkMsg = APICreateL3NetworkMsg;
    var APIGetFreeIpMsg = (function () {
        function APIGetFreeIpMsg() {
        }
        APIGetFreeIpMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIGetFreeIpMsg': this
            };
            return msg;
        };
        return APIGetFreeIpMsg;
    }());
    ApiHeader.APIGetFreeIpMsg = APIGetFreeIpMsg;
    var APIUpdateL3NetworkMsg = (function () {
        function APIUpdateL3NetworkMsg() {
        }
        APIUpdateL3NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIUpdateL3NetworkMsg': this
            };
            return msg;
        };
        return APIUpdateL3NetworkMsg;
    }());
    ApiHeader.APIUpdateL3NetworkMsg = APIUpdateL3NetworkMsg;
    var APIDeleteIpRangeMsg = (function () {
        function APIDeleteIpRangeMsg() {
        }
        APIDeleteIpRangeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIDeleteIpRangeMsg': this
            };
            return msg;
        };
        return APIDeleteIpRangeMsg;
    }());
    ApiHeader.APIDeleteIpRangeMsg = APIDeleteIpRangeMsg;
    var APIChangeL3NetworkStateMsg = (function () {
        function APIChangeL3NetworkStateMsg() {
        }
        APIChangeL3NetworkStateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIChangeL3NetworkStateMsg': this
            };
            return msg;
        };
        return APIChangeL3NetworkStateMsg;
    }());
    ApiHeader.APIChangeL3NetworkStateMsg = APIChangeL3NetworkStateMsg;
    var APIGetL3NetworkMsg = (function () {
        function APIGetL3NetworkMsg() {
        }
        APIGetL3NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIGetL3NetworkMsg': this
            };
            return msg;
        };
        return APIGetL3NetworkMsg;
    }());
    ApiHeader.APIGetL3NetworkMsg = APIGetL3NetworkMsg;
    var APIAddIpRangeMsg = (function () {
        function APIAddIpRangeMsg() {
        }
        APIAddIpRangeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIAddIpRangeMsg': this
            };
            return msg;
        };
        return APIAddIpRangeMsg;
    }());
    ApiHeader.APIAddIpRangeMsg = APIAddIpRangeMsg;
    var APIGetL3NetworkTypesMsg = (function () {
        function APIGetL3NetworkTypesMsg() {
        }
        APIGetL3NetworkTypesMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIGetL3NetworkTypesMsg': this
            };
            return msg;
        };
        return APIGetL3NetworkTypesMsg;
    }());
    ApiHeader.APIGetL3NetworkTypesMsg = APIGetL3NetworkTypesMsg;
    var APISearchL3NetworkMsg = (function () {
        function APISearchL3NetworkMsg() {
        }
        APISearchL3NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APISearchL3NetworkMsg': this
            };
            return msg;
        };
        return APISearchL3NetworkMsg;
    }());
    ApiHeader.APISearchL3NetworkMsg = APISearchL3NetworkMsg;
    var APIAddIpRangeByNetworkCidrMsg = (function () {
        function APIAddIpRangeByNetworkCidrMsg() {
        }
        APIAddIpRangeByNetworkCidrMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIAddIpRangeByNetworkCidrMsg': this
            };
            return msg;
        };
        return APIAddIpRangeByNetworkCidrMsg;
    }());
    ApiHeader.APIAddIpRangeByNetworkCidrMsg = APIAddIpRangeByNetworkCidrMsg;
    var APIQueryIpRangeMsg = (function () {
        function APIQueryIpRangeMsg() {
        }
        APIQueryIpRangeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIQueryIpRangeMsg': this
            };
            return msg;
        };
        return APIQueryIpRangeMsg;
    }());
    ApiHeader.APIQueryIpRangeMsg = APIQueryIpRangeMsg;
    var APIRemoveDnsFromL3NetworkMsg = (function () {
        function APIRemoveDnsFromL3NetworkMsg() {
        }
        APIRemoveDnsFromL3NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIRemoveDnsFromL3NetworkMsg': this
            };
            return msg;
        };
        return APIRemoveDnsFromL3NetworkMsg;
    }());
    ApiHeader.APIRemoveDnsFromL3NetworkMsg = APIRemoveDnsFromL3NetworkMsg;
    var APIListIpRangeMsg = (function () {
        function APIListIpRangeMsg() {
        }
        APIListIpRangeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIListIpRangeMsg': this
            };
            return msg;
        };
        return APIListIpRangeMsg;
    }());
    ApiHeader.APIListIpRangeMsg = APIListIpRangeMsg;
    var APIGetIpAddressCapacityMsg = (function () {
        function APIGetIpAddressCapacityMsg() {
        }
        APIGetIpAddressCapacityMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIGetIpAddressCapacityMsg': this
            };
            return msg;
        };
        return APIGetIpAddressCapacityMsg;
    }());
    ApiHeader.APIGetIpAddressCapacityMsg = APIGetIpAddressCapacityMsg;
    var APIDeleteL3NetworkMsg = (function () {
        function APIDeleteL3NetworkMsg() {
        }
        APIDeleteL3NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIDeleteL3NetworkMsg': this
            };
            return msg;
        };
        return APIDeleteL3NetworkMsg;
    }());
    ApiHeader.APIDeleteL3NetworkMsg = APIDeleteL3NetworkMsg;
    var APIUpdateIpRangeMsg = (function () {
        function APIUpdateIpRangeMsg() {
        }
        APIUpdateIpRangeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIUpdateIpRangeMsg': this
            };
            return msg;
        };
        return APIUpdateIpRangeMsg;
    }());
    ApiHeader.APIUpdateIpRangeMsg = APIUpdateIpRangeMsg;
    var APIQueryL3NetworkMsg = (function () {
        function APIQueryL3NetworkMsg() {
        }
        APIQueryL3NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l3.APIQueryL3NetworkMsg': this
            };
            return msg;
        };
        return APIQueryL3NetworkMsg;
    }());
    ApiHeader.APIQueryL3NetworkMsg = APIQueryL3NetworkMsg;
    var APIAttachNetworkServiceToL3NetworkMsg = (function () {
        function APIAttachNetworkServiceToL3NetworkMsg() {
        }
        APIAttachNetworkServiceToL3NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.service.APIAttachNetworkServiceToL3NetworkMsg': this
            };
            return msg;
        };
        return APIAttachNetworkServiceToL3NetworkMsg;
    }());
    ApiHeader.APIAttachNetworkServiceToL3NetworkMsg = APIAttachNetworkServiceToL3NetworkMsg;
    var APIAddNetworkServiceProviderMsg = (function () {
        function APIAddNetworkServiceProviderMsg() {
        }
        APIAddNetworkServiceProviderMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.service.APIAddNetworkServiceProviderMsg': this
            };
            return msg;
        };
        return APIAddNetworkServiceProviderMsg;
    }());
    ApiHeader.APIAddNetworkServiceProviderMsg = APIAddNetworkServiceProviderMsg;
    var APIQueryNetworkServiceL3NetworkRefMsg = (function () {
        function APIQueryNetworkServiceL3NetworkRefMsg() {
        }
        APIQueryNetworkServiceL3NetworkRefMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.service.APIQueryNetworkServiceL3NetworkRefMsg': this
            };
            return msg;
        };
        return APIQueryNetworkServiceL3NetworkRefMsg;
    }());
    ApiHeader.APIQueryNetworkServiceL3NetworkRefMsg = APIQueryNetworkServiceL3NetworkRefMsg;
    var APIAttachNetworkServiceProviderToL2NetworkMsg = (function () {
        function APIAttachNetworkServiceProviderToL2NetworkMsg() {
        }
        APIAttachNetworkServiceProviderToL2NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.service.APIAttachNetworkServiceProviderToL2NetworkMsg': this
            };
            return msg;
        };
        return APIAttachNetworkServiceProviderToL2NetworkMsg;
    }());
    ApiHeader.APIAttachNetworkServiceProviderToL2NetworkMsg = APIAttachNetworkServiceProviderToL2NetworkMsg;
    var APISearchNetworkServiceProviderMsg = (function () {
        function APISearchNetworkServiceProviderMsg() {
        }
        APISearchNetworkServiceProviderMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.service.APISearchNetworkServiceProviderMsg': this
            };
            return msg;
        };
        return APISearchNetworkServiceProviderMsg;
    }());
    ApiHeader.APISearchNetworkServiceProviderMsg = APISearchNetworkServiceProviderMsg;
    var APIDetachNetworkServiceProviderFromL2NetworkMsg = (function () {
        function APIDetachNetworkServiceProviderFromL2NetworkMsg() {
        }
        APIDetachNetworkServiceProviderFromL2NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.service.APIDetachNetworkServiceProviderFromL2NetworkMsg': this
            };
            return msg;
        };
        return APIDetachNetworkServiceProviderFromL2NetworkMsg;
    }());
    ApiHeader.APIDetachNetworkServiceProviderFromL2NetworkMsg = APIDetachNetworkServiceProviderFromL2NetworkMsg;
    var APIQueryNetworkServiceProviderMsg = (function () {
        function APIQueryNetworkServiceProviderMsg() {
        }
        APIQueryNetworkServiceProviderMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.service.APIQueryNetworkServiceProviderMsg': this
            };
            return msg;
        };
        return APIQueryNetworkServiceProviderMsg;
    }());
    ApiHeader.APIQueryNetworkServiceProviderMsg = APIQueryNetworkServiceProviderMsg;
    var APIGetNetworkServiceTypesMsg = (function () {
        function APIGetNetworkServiceTypesMsg() {
        }
        APIGetNetworkServiceTypesMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.service.APIGetNetworkServiceTypesMsg': this
            };
            return msg;
        };
        return APIGetNetworkServiceTypesMsg;
    }());
    ApiHeader.APIGetNetworkServiceTypesMsg = APIGetNetworkServiceTypesMsg;
    var APIGetNetworkServiceProviderMsg = (function () {
        function APIGetNetworkServiceProviderMsg() {
        }
        APIGetNetworkServiceProviderMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.service.APIGetNetworkServiceProviderMsg': this
            };
            return msg;
        };
        return APIGetNetworkServiceProviderMsg;
    }());
    ApiHeader.APIGetNetworkServiceProviderMsg = APIGetNetworkServiceProviderMsg;
    var APIListNetworkServiceProviderMsg = (function () {
        function APIListNetworkServiceProviderMsg() {
        }
        APIListNetworkServiceProviderMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.service.APIListNetworkServiceProviderMsg': this
            };
            return msg;
        };
        return APIListNetworkServiceProviderMsg;
    }());
    ApiHeader.APIListNetworkServiceProviderMsg = APIListNetworkServiceProviderMsg;
    var APIAttachL2NetworkToClusterMsg = (function () {
        function APIAttachL2NetworkToClusterMsg() {
        }
        APIAttachL2NetworkToClusterMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l2.APIAttachL2NetworkToClusterMsg': this
            };
            return msg;
        };
        return APIAttachL2NetworkToClusterMsg;
    }());
    ApiHeader.APIAttachL2NetworkToClusterMsg = APIAttachL2NetworkToClusterMsg;
    var APIQueryL2VlanNetworkMsg = (function () {
        function APIQueryL2VlanNetworkMsg() {
        }
        APIQueryL2VlanNetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l2.APIQueryL2VlanNetworkMsg': this
            };
            return msg;
        };
        return APIQueryL2VlanNetworkMsg;
    }());
    ApiHeader.APIQueryL2VlanNetworkMsg = APIQueryL2VlanNetworkMsg;
    var APIGetL2NetworkMsg = (function () {
        function APIGetL2NetworkMsg() {
        }
        APIGetL2NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l2.APIGetL2NetworkMsg': this
            };
            return msg;
        };
        return APIGetL2NetworkMsg;
    }());
    ApiHeader.APIGetL2NetworkMsg = APIGetL2NetworkMsg;
    var APIListL2NetworkMsg = (function () {
        function APIListL2NetworkMsg() {
        }
        APIListL2NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l2.APIListL2NetworkMsg': this
            };
            return msg;
        };
        return APIListL2NetworkMsg;
    }());
    ApiHeader.APIListL2NetworkMsg = APIListL2NetworkMsg;
    var APISearchL2VlanNetworkMsg = (function () {
        function APISearchL2VlanNetworkMsg() {
        }
        APISearchL2VlanNetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l2.APISearchL2VlanNetworkMsg': this
            };
            return msg;
        };
        return APISearchL2VlanNetworkMsg;
    }());
    ApiHeader.APISearchL2VlanNetworkMsg = APISearchL2VlanNetworkMsg;
    var APICreateL2VlanNetworkMsg = (function () {
        function APICreateL2VlanNetworkMsg() {
        }
        APICreateL2VlanNetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l2.APICreateL2VlanNetworkMsg': this
            };
            return msg;
        };
        return APICreateL2VlanNetworkMsg;
    }());
    ApiHeader.APICreateL2VlanNetworkMsg = APICreateL2VlanNetworkMsg;
    var APIDetachL2NetworkFromClusterMsg = (function () {
        function APIDetachL2NetworkFromClusterMsg() {
        }
        APIDetachL2NetworkFromClusterMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l2.APIDetachL2NetworkFromClusterMsg': this
            };
            return msg;
        };
        return APIDetachL2NetworkFromClusterMsg;
    }());
    ApiHeader.APIDetachL2NetworkFromClusterMsg = APIDetachL2NetworkFromClusterMsg;
    var APIDeleteL2NetworkMsg = (function () {
        function APIDeleteL2NetworkMsg() {
        }
        APIDeleteL2NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l2.APIDeleteL2NetworkMsg': this
            };
            return msg;
        };
        return APIDeleteL2NetworkMsg;
    }());
    ApiHeader.APIDeleteL2NetworkMsg = APIDeleteL2NetworkMsg;
    var APISearchL2NetworkMsg = (function () {
        function APISearchL2NetworkMsg() {
        }
        APISearchL2NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l2.APISearchL2NetworkMsg': this
            };
            return msg;
        };
        return APISearchL2NetworkMsg;
    }());
    ApiHeader.APISearchL2NetworkMsg = APISearchL2NetworkMsg;
    var APICreateL2NoVlanNetworkMsg = (function () {
        function APICreateL2NoVlanNetworkMsg() {
        }
        APICreateL2NoVlanNetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l2.APICreateL2NoVlanNetworkMsg': this
            };
            return msg;
        };
        return APICreateL2NoVlanNetworkMsg;
    }());
    ApiHeader.APICreateL2NoVlanNetworkMsg = APICreateL2NoVlanNetworkMsg;
    var APIListL2VlanNetworkMsg = (function () {
        function APIListL2VlanNetworkMsg() {
        }
        APIListL2VlanNetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l2.APIListL2VlanNetworkMsg': this
            };
            return msg;
        };
        return APIListL2VlanNetworkMsg;
    }());
    ApiHeader.APIListL2VlanNetworkMsg = APIListL2VlanNetworkMsg;
    var APIUpdateL2NetworkMsg = (function () {
        function APIUpdateL2NetworkMsg() {
        }
        APIUpdateL2NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l2.APIUpdateL2NetworkMsg': this
            };
            return msg;
        };
        return APIUpdateL2NetworkMsg;
    }());
    ApiHeader.APIUpdateL2NetworkMsg = APIUpdateL2NetworkMsg;
    var APIGetL2VlanNetworkMsg = (function () {
        function APIGetL2VlanNetworkMsg() {
        }
        APIGetL2VlanNetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l2.APIGetL2VlanNetworkMsg': this
            };
            return msg;
        };
        return APIGetL2VlanNetworkMsg;
    }());
    ApiHeader.APIGetL2VlanNetworkMsg = APIGetL2VlanNetworkMsg;
    var APIGetL2NetworkTypesMsg = (function () {
        function APIGetL2NetworkTypesMsg() {
        }
        APIGetL2NetworkTypesMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l2.APIGetL2NetworkTypesMsg': this
            };
            return msg;
        };
        return APIGetL2NetworkTypesMsg;
    }());
    ApiHeader.APIGetL2NetworkTypesMsg = APIGetL2NetworkTypesMsg;
    var APIQueryL2NetworkMsg = (function () {
        function APIQueryL2NetworkMsg() {
        }
        APIQueryL2NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.network.l2.APIQueryL2NetworkMsg': this
            };
            return msg;
        };
        return APIQueryL2NetworkMsg;
    }());
    ApiHeader.APIQueryL2NetworkMsg = APIQueryL2NetworkMsg;
    var APIDeleteSearchIndexMsg = (function () {
        function APIDeleteSearchIndexMsg() {
        }
        APIDeleteSearchIndexMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.search.APIDeleteSearchIndexMsg': this
            };
            return msg;
        };
        return APIDeleteSearchIndexMsg;
    }());
    ApiHeader.APIDeleteSearchIndexMsg = APIDeleteSearchIndexMsg;
    var APISearchGenerateSqlTriggerMsg = (function () {
        function APISearchGenerateSqlTriggerMsg() {
        }
        APISearchGenerateSqlTriggerMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.search.APISearchGenerateSqlTriggerMsg': this
            };
            return msg;
        };
        return APISearchGenerateSqlTriggerMsg;
    }());
    ApiHeader.APISearchGenerateSqlTriggerMsg = APISearchGenerateSqlTriggerMsg;
    var APICreateSearchIndexMsg = (function () {
        function APICreateSearchIndexMsg() {
        }
        APICreateSearchIndexMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.search.APICreateSearchIndexMsg': this
            };
            return msg;
        };
        return APICreateSearchIndexMsg;
    }());
    ApiHeader.APICreateSearchIndexMsg = APICreateSearchIndexMsg;
    var APIQueryUserTagMsg = (function () {
        function APIQueryUserTagMsg() {
        }
        APIQueryUserTagMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.tag.APIQueryUserTagMsg': this
            };
            return msg;
        };
        return APIQueryUserTagMsg;
    }());
    ApiHeader.APIQueryUserTagMsg = APIQueryUserTagMsg;
    var APIQuerySystemTagMsg = (function () {
        function APIQuerySystemTagMsg() {
        }
        APIQuerySystemTagMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.tag.APIQuerySystemTagMsg': this
            };
            return msg;
        };
        return APIQuerySystemTagMsg;
    }());
    ApiHeader.APIQuerySystemTagMsg = APIQuerySystemTagMsg;
    var APIDeleteTagMsg = (function () {
        function APIDeleteTagMsg() {
        }
        APIDeleteTagMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.tag.APIDeleteTagMsg': this
            };
            return msg;
        };
        return APIDeleteTagMsg;
    }());
    ApiHeader.APIDeleteTagMsg = APIDeleteTagMsg;
    var APICreateUserTagMsg = (function () {
        function APICreateUserTagMsg() {
        }
        APICreateUserTagMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.tag.APICreateUserTagMsg': this
            };
            return msg;
        };
        return APICreateUserTagMsg;
    }());
    ApiHeader.APICreateUserTagMsg = APICreateUserTagMsg;
    var APICreateSystemTagMsg = (function () {
        function APICreateSystemTagMsg() {
        }
        APICreateSystemTagMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.tag.APICreateSystemTagMsg': this
            };
            return msg;
        };
        return APICreateSystemTagMsg;
    }());
    ApiHeader.APICreateSystemTagMsg = APICreateSystemTagMsg;
    var APIUpdateSystemTagMsg = (function () {
        function APIUpdateSystemTagMsg() {
        }
        APIUpdateSystemTagMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.tag.APIUpdateSystemTagMsg': this
            };
            return msg;
        };
        return APIUpdateSystemTagMsg;
    }());
    ApiHeader.APIUpdateSystemTagMsg = APIUpdateSystemTagMsg;
    var APIQueryTagMsg = (function () {
        function APIQueryTagMsg() {
        }
        APIQueryTagMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.tag.APIQueryTagMsg': this
            };
            return msg;
        };
        return APIQueryTagMsg;
    }());
    ApiHeader.APIQueryTagMsg = APIQueryTagMsg;
    var APIQueryManagementNodeMsg = (function () {
        function APIQueryManagementNodeMsg() {
        }
        APIQueryManagementNodeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.managementnode.APIQueryManagementNodeMsg': this
            };
            return msg;
        };
        return APIQueryManagementNodeMsg;
    }());
    ApiHeader.APIQueryManagementNodeMsg = APIQueryManagementNodeMsg;
    var APIListManagementNodeMsg = (function () {
        function APIListManagementNodeMsg() {
        }
        APIListManagementNodeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.managementnode.APIListManagementNodeMsg': this
            };
            return msg;
        };
        return APIListManagementNodeMsg;
    }());
    ApiHeader.APIListManagementNodeMsg = APIListManagementNodeMsg;
    var APICreateMessage = (function () {
        function APICreateMessage() {
        }
        APICreateMessage.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.message.APICreateMessage': this
            };
            return msg;
        };
        return APICreateMessage;
    }());
    ApiHeader.APICreateMessage = APICreateMessage;
    var APIListClusterMsg = (function () {
        function APIListClusterMsg() {
        }
        APIListClusterMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.cluster.APIListClusterMsg': this
            };
            return msg;
        };
        return APIListClusterMsg;
    }());
    ApiHeader.APIListClusterMsg = APIListClusterMsg;
    var APIGetClusterMsg = (function () {
        function APIGetClusterMsg() {
        }
        APIGetClusterMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.cluster.APIGetClusterMsg': this
            };
            return msg;
        };
        return APIGetClusterMsg;
    }());
    ApiHeader.APIGetClusterMsg = APIGetClusterMsg;
    var APISearchClusterMsg = (function () {
        function APISearchClusterMsg() {
        }
        APISearchClusterMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.cluster.APISearchClusterMsg': this
            };
            return msg;
        };
        return APISearchClusterMsg;
    }());
    ApiHeader.APISearchClusterMsg = APISearchClusterMsg;
    var APIQueryClusterMsg = (function () {
        function APIQueryClusterMsg() {
        }
        APIQueryClusterMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.cluster.APIQueryClusterMsg': this
            };
            return msg;
        };
        return APIQueryClusterMsg;
    }());
    ApiHeader.APIQueryClusterMsg = APIQueryClusterMsg;
    var APIDeleteClusterMsg = (function () {
        function APIDeleteClusterMsg() {
        }
        APIDeleteClusterMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.cluster.APIDeleteClusterMsg': this
            };
            return msg;
        };
        return APIDeleteClusterMsg;
    }());
    ApiHeader.APIDeleteClusterMsg = APIDeleteClusterMsg;
    var APIUpdateClusterMsg = (function () {
        function APIUpdateClusterMsg() {
        }
        APIUpdateClusterMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.cluster.APIUpdateClusterMsg': this
            };
            return msg;
        };
        return APIUpdateClusterMsg;
    }());
    ApiHeader.APIUpdateClusterMsg = APIUpdateClusterMsg;
    var APICreateClusterMsg = (function () {
        function APICreateClusterMsg() {
        }
        APICreateClusterMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.cluster.APICreateClusterMsg': this
            };
            return msg;
        };
        return APICreateClusterMsg;
    }());
    ApiHeader.APICreateClusterMsg = APICreateClusterMsg;
    var APIChangeClusterStateMsg = (function () {
        function APIChangeClusterStateMsg() {
        }
        APIChangeClusterStateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.cluster.APIChangeClusterStateMsg': this
            };
            return msg;
        };
        return APIChangeClusterStateMsg;
    }());
    ApiHeader.APIChangeClusterStateMsg = APIChangeClusterStateMsg;
    var APIAttachPolicyToUserGroupMsg = (function () {
        function APIAttachPolicyToUserGroupMsg() {
        }
        APIAttachPolicyToUserGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIAttachPolicyToUserGroupMsg': this
            };
            return msg;
        };
        return APIAttachPolicyToUserGroupMsg;
    }());
    ApiHeader.APIAttachPolicyToUserGroupMsg = APIAttachPolicyToUserGroupMsg;
    var APIRemoveUserFromGroupMsg = (function () {
        function APIRemoveUserFromGroupMsg() {
        }
        APIRemoveUserFromGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIRemoveUserFromGroupMsg': this
            };
            return msg;
        };
        return APIRemoveUserFromGroupMsg;
    }());
    ApiHeader.APIRemoveUserFromGroupMsg = APIRemoveUserFromGroupMsg;
    var APIAttachPolicyToUserMsg = (function () {
        function APIAttachPolicyToUserMsg() {
        }
        APIAttachPolicyToUserMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIAttachPolicyToUserMsg': this
            };
            return msg;
        };
        return APIAttachPolicyToUserMsg;
    }());
    ApiHeader.APIAttachPolicyToUserMsg = APIAttachPolicyToUserMsg;
    var APIGetAccountMsg = (function () {
        function APIGetAccountMsg() {
        }
        APIGetAccountMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIGetAccountMsg': this
            };
            return msg;
        };
        return APIGetAccountMsg;
    }());
    ApiHeader.APIGetAccountMsg = APIGetAccountMsg;
    var APIListAccountMsg = (function () {
        function APIListAccountMsg() {
        }
        APIListAccountMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIListAccountMsg': this
            };
            return msg;
        };
        return APIListAccountMsg;
    }());
    ApiHeader.APIListAccountMsg = APIListAccountMsg;
    var APIAddUserToGroupMsg = (function () {
        function APIAddUserToGroupMsg() {
        }
        APIAddUserToGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIAddUserToGroupMsg': this
            };
            return msg;
        };
        return APIAddUserToGroupMsg;
    }());
    ApiHeader.APIAddUserToGroupMsg = APIAddUserToGroupMsg;
    var APIQueryQuotaMsg = (function () {
        function APIQueryQuotaMsg() {
        }
        APIQueryQuotaMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIQueryQuotaMsg': this
            };
            return msg;
        };
        return APIQueryQuotaMsg;
    }());
    ApiHeader.APIQueryQuotaMsg = APIQueryQuotaMsg;
    var APIShareResourceMsg = (function () {
        function APIShareResourceMsg() {
        }
        APIShareResourceMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIShareResourceMsg': this
            };
            return msg;
        };
        return APIShareResourceMsg;
    }());
    ApiHeader.APIShareResourceMsg = APIShareResourceMsg;
    var APIListPolicyMsg = (function () {
        function APIListPolicyMsg() {
        }
        APIListPolicyMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIListPolicyMsg': this
            };
            return msg;
        };
        return APIListPolicyMsg;
    }());
    ApiHeader.APIListPolicyMsg = APIListPolicyMsg;
    var APICreateAccountMsg = (function () {
        function APICreateAccountMsg() {
        }
        APICreateAccountMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APICreateAccountMsg': this
            };
            return msg;
        };
        return APICreateAccountMsg;
    }());
    ApiHeader.APICreateAccountMsg = APICreateAccountMsg;
    var APIDeleteAccountMsg = (function () {
        function APIDeleteAccountMsg() {
        }
        APIDeleteAccountMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIDeleteAccountMsg': this
            };
            return msg;
        };
        return APIDeleteAccountMsg;
    }());
    ApiHeader.APIDeleteAccountMsg = APIDeleteAccountMsg;
    var APICreateUserGroupMsg = (function () {
        function APICreateUserGroupMsg() {
        }
        APICreateUserGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APICreateUserGroupMsg': this
            };
            return msg;
        };
        return APICreateUserGroupMsg;
    }());
    ApiHeader.APICreateUserGroupMsg = APICreateUserGroupMsg;
    var APICreateUserMsg = (function () {
        function APICreateUserMsg() {
        }
        APICreateUserMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APICreateUserMsg': this
            };
            return msg;
        };
        return APICreateUserMsg;
    }());
    ApiHeader.APICreateUserMsg = APICreateUserMsg;
    var APILogInByUserMsg = (function () {
        function APILogInByUserMsg() {
        }
        APILogInByUserMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APILogInByUserMsg': this
            };
            return msg;
        };
        return APILogInByUserMsg;
    }());
    ApiHeader.APILogInByUserMsg = APILogInByUserMsg;
    var APISearchAccountMsg = (function () {
        function APISearchAccountMsg() {
        }
        APISearchAccountMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APISearchAccountMsg': this
            };
            return msg;
        };
        return APISearchAccountMsg;
    }());
    ApiHeader.APISearchAccountMsg = APISearchAccountMsg;
    var APISearchPolicyMsg = (function () {
        function APISearchPolicyMsg() {
        }
        APISearchPolicyMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APISearchPolicyMsg': this
            };
            return msg;
        };
        return APISearchPolicyMsg;
    }());
    ApiHeader.APISearchPolicyMsg = APISearchPolicyMsg;
    var APISessionMessage = (function () {
        function APISessionMessage() {
        }
        APISessionMessage.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APISessionMessage': this
            };
            return msg;
        };
        return APISessionMessage;
    }());
    ApiHeader.APISessionMessage = APISessionMessage;
    var APIGetUserMsg = (function () {
        function APIGetUserMsg() {
        }
        APIGetUserMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIGetUserMsg': this
            };
            return msg;
        };
        return APIGetUserMsg;
    }());
    ApiHeader.APIGetUserMsg = APIGetUserMsg;
    var APIGetUserGroupMsg = (function () {
        function APIGetUserGroupMsg() {
        }
        APIGetUserGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIGetUserGroupMsg': this
            };
            return msg;
        };
        return APIGetUserGroupMsg;
    }());
    ApiHeader.APIGetUserGroupMsg = APIGetUserGroupMsg;
    var APIDetachPolicyFromUserGroupMsg = (function () {
        function APIDetachPolicyFromUserGroupMsg() {
        }
        APIDetachPolicyFromUserGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIDetachPolicyFromUserGroupMsg': this
            };
            return msg;
        };
        return APIDetachPolicyFromUserGroupMsg;
    }());
    ApiHeader.APIDetachPolicyFromUserGroupMsg = APIDetachPolicyFromUserGroupMsg;
    var APIUpdateQuotaMsg = (function () {
        function APIUpdateQuotaMsg() {
        }
        APIUpdateQuotaMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIUpdateQuotaMsg': this
            };
            return msg;
        };
        return APIUpdateQuotaMsg;
    }());
    ApiHeader.APIUpdateQuotaMsg = APIUpdateQuotaMsg;
    var APIQueryAccountMsg = (function () {
        function APIQueryAccountMsg() {
        }
        APIQueryAccountMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIQueryAccountMsg': this
            };
            return msg;
        };
        return APIQueryAccountMsg;
    }());
    ApiHeader.APIQueryAccountMsg = APIQueryAccountMsg;
    var APIQueryPolicyMsg = (function () {
        function APIQueryPolicyMsg() {
        }
        APIQueryPolicyMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIQueryPolicyMsg': this
            };
            return msg;
        };
        return APIQueryPolicyMsg;
    }());
    ApiHeader.APIQueryPolicyMsg = APIQueryPolicyMsg;
    var APIQueryUserMsg = (function () {
        function APIQueryUserMsg() {
        }
        APIQueryUserMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIQueryUserMsg': this
            };
            return msg;
        };
        return APIQueryUserMsg;
    }());
    ApiHeader.APIQueryUserMsg = APIQueryUserMsg;
    var APIDeletePolicyMsg = (function () {
        function APIDeletePolicyMsg() {
        }
        APIDeletePolicyMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIDeletePolicyMsg': this
            };
            return msg;
        };
        return APIDeletePolicyMsg;
    }());
    ApiHeader.APIDeletePolicyMsg = APIDeletePolicyMsg;
    var APIRevokeResourceSharingMsg = (function () {
        function APIRevokeResourceSharingMsg() {
        }
        APIRevokeResourceSharingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIRevokeResourceSharingMsg': this
            };
            return msg;
        };
        return APIRevokeResourceSharingMsg;
    }());
    ApiHeader.APIRevokeResourceSharingMsg = APIRevokeResourceSharingMsg;
    var APILogInByAccountMsg = (function () {
        function APILogInByAccountMsg() {
        }
        APILogInByAccountMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APILogInByAccountMsg': this
            };
            return msg;
        };
        return APILogInByAccountMsg;
    }());
    ApiHeader.APILogInByAccountMsg = APILogInByAccountMsg;
    var APIValidateSessionMsg = (function () {
        function APIValidateSessionMsg() {
        }
        APIValidateSessionMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIValidateSessionMsg': this
            };
            return msg;
        };
        return APIValidateSessionMsg;
    }());
    ApiHeader.APIValidateSessionMsg = APIValidateSessionMsg;
    var APISearchUserGroupMsg = (function () {
        function APISearchUserGroupMsg() {
        }
        APISearchUserGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APISearchUserGroupMsg': this
            };
            return msg;
        };
        return APISearchUserGroupMsg;
    }());
    ApiHeader.APISearchUserGroupMsg = APISearchUserGroupMsg;
    var APIListUserMsg = (function () {
        function APIListUserMsg() {
        }
        APIListUserMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIListUserMsg': this
            };
            return msg;
        };
        return APIListUserMsg;
    }());
    ApiHeader.APIListUserMsg = APIListUserMsg;
    var APIDeleteUserMsg = (function () {
        function APIDeleteUserMsg() {
        }
        APIDeleteUserMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIDeleteUserMsg': this
            };
            return msg;
        };
        return APIDeleteUserMsg;
    }());
    ApiHeader.APIDeleteUserMsg = APIDeleteUserMsg;
    var APIUpdateUserMsg = (function () {
        function APIUpdateUserMsg() {
        }
        APIUpdateUserMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIUpdateUserMsg': this
            };
            return msg;
        };
        return APIUpdateUserMsg;
    }());
    ApiHeader.APIUpdateUserMsg = APIUpdateUserMsg;
    var APISearchUserMsg = (function () {
        function APISearchUserMsg() {
        }
        APISearchUserMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APISearchUserMsg': this
            };
            return msg;
        };
        return APISearchUserMsg;
    }());
    ApiHeader.APISearchUserMsg = APISearchUserMsg;
    var APIUpdateAccountMsg = (function () {
        function APIUpdateAccountMsg() {
        }
        APIUpdateAccountMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIUpdateAccountMsg': this
            };
            return msg;
        };
        return APIUpdateAccountMsg;
    }());
    ApiHeader.APIUpdateAccountMsg = APIUpdateAccountMsg;
    var APIDeleteUserGroupMsg = (function () {
        function APIDeleteUserGroupMsg() {
        }
        APIDeleteUserGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIDeleteUserGroupMsg': this
            };
            return msg;
        };
        return APIDeleteUserGroupMsg;
    }());
    ApiHeader.APIDeleteUserGroupMsg = APIDeleteUserGroupMsg;
    var APILogOutMsg = (function () {
        function APILogOutMsg() {
        }
        APILogOutMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APILogOutMsg': this
            };
            return msg;
        };
        return APILogOutMsg;
    }());
    ApiHeader.APILogOutMsg = APILogOutMsg;
    var APIGetPolicyMsg = (function () {
        function APIGetPolicyMsg() {
        }
        APIGetPolicyMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIGetPolicyMsg': this
            };
            return msg;
        };
        return APIGetPolicyMsg;
    }());
    ApiHeader.APIGetPolicyMsg = APIGetPolicyMsg;
    var StatementEffect;
    (function (StatementEffect) {
        StatementEffect[StatementEffect["Allow"] = 0] = "Allow";
        StatementEffect[StatementEffect["Deny"] = 1] = "Deny";
    })(StatementEffect = ApiHeader.StatementEffect || (ApiHeader.StatementEffect = {}));
    var Statement = (function () {
        function Statement() {
        }
        return Statement;
    }());
    ApiHeader.Statement = Statement;
    var APICreatePolicyMsg = (function () {
        function APICreatePolicyMsg() {
        }
        APICreatePolicyMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APICreatePolicyMsg': this
            };
            return msg;
        };
        return APICreatePolicyMsg;
    }());
    ApiHeader.APICreatePolicyMsg = APICreatePolicyMsg;
    var APIDetachPolicyFromUserMsg = (function () {
        function APIDetachPolicyFromUserMsg() {
        }
        APIDetachPolicyFromUserMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIDetachPolicyFromUserMsg': this
            };
            return msg;
        };
        return APIDetachPolicyFromUserMsg;
    }());
    ApiHeader.APIDetachPolicyFromUserMsg = APIDetachPolicyFromUserMsg;
    var APIQueryUserGroupMsg = (function () {
        function APIQueryUserGroupMsg() {
        }
        APIQueryUserGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.identity.APIQueryUserGroupMsg': this
            };
            return msg;
        };
        return APIQueryUserGroupMsg;
    }());
    ApiHeader.APIQueryUserGroupMsg = APIQueryUserGroupMsg;
    var APIUpdateZoneMsg = (function () {
        function APIUpdateZoneMsg() {
        }
        APIUpdateZoneMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.zone.APIUpdateZoneMsg': this
            };
            return msg;
        };
        return APIUpdateZoneMsg;
    }());
    ApiHeader.APIUpdateZoneMsg = APIUpdateZoneMsg;
    var APIGetZoneMsg = (function () {
        function APIGetZoneMsg() {
        }
        APIGetZoneMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.zone.APIGetZoneMsg': this
            };
            return msg;
        };
        return APIGetZoneMsg;
    }());
    ApiHeader.APIGetZoneMsg = APIGetZoneMsg;
    var APIDeleteZoneMsg = (function () {
        function APIDeleteZoneMsg() {
        }
        APIDeleteZoneMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.zone.APIDeleteZoneMsg': this
            };
            return msg;
        };
        return APIDeleteZoneMsg;
    }());
    ApiHeader.APIDeleteZoneMsg = APIDeleteZoneMsg;
    var APICreateZoneMsg = (function () {
        function APICreateZoneMsg() {
        }
        APICreateZoneMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.zone.APICreateZoneMsg': this
            };
            return msg;
        };
        return APICreateZoneMsg;
    }());
    ApiHeader.APICreateZoneMsg = APICreateZoneMsg;
    var APISearchZoneMsg = (function () {
        function APISearchZoneMsg() {
        }
        APISearchZoneMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.zone.APISearchZoneMsg': this
            };
            return msg;
        };
        return APISearchZoneMsg;
    }());
    ApiHeader.APISearchZoneMsg = APISearchZoneMsg;
    var APIQueryZoneMsg = (function () {
        function APIQueryZoneMsg() {
        }
        APIQueryZoneMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.zone.APIQueryZoneMsg': this
            };
            return msg;
        };
        return APIQueryZoneMsg;
    }());
    ApiHeader.APIQueryZoneMsg = APIQueryZoneMsg;
    var APIListZonesMsg = (function () {
        function APIListZonesMsg() {
        }
        APIListZonesMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.zone.APIListZonesMsg': this
            };
            return msg;
        };
        return APIListZonesMsg;
    }());
    ApiHeader.APIListZonesMsg = APIListZonesMsg;
    var APIChangeZoneStateMsg = (function () {
        function APIChangeZoneStateMsg() {
        }
        APIChangeZoneStateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.zone.APIChangeZoneStateMsg': this
            };
            return msg;
        };
        return APIChangeZoneStateMsg;
    }());
    ApiHeader.APIChangeZoneStateMsg = APIChangeZoneStateMsg;
    var APIChangeHostStateMsg = (function () {
        function APIChangeHostStateMsg() {
        }
        APIChangeHostStateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.host.APIChangeHostStateMsg': this
            };
            return msg;
        };
        return APIChangeHostStateMsg;
    }());
    ApiHeader.APIChangeHostStateMsg = APIChangeHostStateMsg;
    var APIReconnectHostMsg = (function () {
        function APIReconnectHostMsg() {
        }
        APIReconnectHostMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.host.APIReconnectHostMsg': this
            };
            return msg;
        };
        return APIReconnectHostMsg;
    }());
    ApiHeader.APIReconnectHostMsg = APIReconnectHostMsg;
    var APIListHostMsg = (function () {
        function APIListHostMsg() {
        }
        APIListHostMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.host.APIListHostMsg': this
            };
            return msg;
        };
        return APIListHostMsg;
    }());
    ApiHeader.APIListHostMsg = APIListHostMsg;
    var APIUpdateHostMsg = (function () {
        function APIUpdateHostMsg() {
        }
        APIUpdateHostMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.host.APIUpdateHostMsg': this
            };
            return msg;
        };
        return APIUpdateHostMsg;
    }());
    ApiHeader.APIUpdateHostMsg = APIUpdateHostMsg;
    var APIDeleteHostMsg = (function () {
        function APIDeleteHostMsg() {
        }
        APIDeleteHostMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.host.APIDeleteHostMsg': this
            };
            return msg;
        };
        return APIDeleteHostMsg;
    }());
    ApiHeader.APIDeleteHostMsg = APIDeleteHostMsg;
    var APIGetHostMsg = (function () {
        function APIGetHostMsg() {
        }
        APIGetHostMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.host.APIGetHostMsg': this
            };
            return msg;
        };
        return APIGetHostMsg;
    }());
    ApiHeader.APIGetHostMsg = APIGetHostMsg;
    var APISearchHostMsg = (function () {
        function APISearchHostMsg() {
        }
        APISearchHostMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.host.APISearchHostMsg': this
            };
            return msg;
        };
        return APISearchHostMsg;
    }());
    ApiHeader.APISearchHostMsg = APISearchHostMsg;
    var APIGetHypervisorTypesMsg = (function () {
        function APIGetHypervisorTypesMsg() {
        }
        APIGetHypervisorTypesMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.host.APIGetHypervisorTypesMsg': this
            };
            return msg;
        };
        return APIGetHypervisorTypesMsg;
    }());
    ApiHeader.APIGetHypervisorTypesMsg = APIGetHypervisorTypesMsg;
    var APIQueryHostMsg = (function () {
        function APIQueryHostMsg() {
        }
        APIQueryHostMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.host.APIQueryHostMsg': this
            };
            return msg;
        };
        return APIQueryHostMsg;
    }());
    ApiHeader.APIQueryHostMsg = APIQueryHostMsg;
    var APIAddSimulatorHostMsg = (function () {
        function APIAddSimulatorHostMsg() {
        }
        APIAddSimulatorHostMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.simulator.APIAddSimulatorHostMsg': this
            };
            return msg;
        };
        return APIAddSimulatorHostMsg;
    }());
    ApiHeader.APIAddSimulatorHostMsg = APIAddSimulatorHostMsg;
    var APIAddSimulatorPrimaryStorageMsg = (function () {
        function APIAddSimulatorPrimaryStorageMsg() {
        }
        APIAddSimulatorPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.simulator.storage.primary.APIAddSimulatorPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIAddSimulatorPrimaryStorageMsg;
    }());
    ApiHeader.APIAddSimulatorPrimaryStorageMsg = APIAddSimulatorPrimaryStorageMsg;
    var APIAddSimulatorBackupStorageMsg = (function () {
        function APIAddSimulatorBackupStorageMsg() {
        }
        APIAddSimulatorBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.simulator.storage.backup.APIAddSimulatorBackupStorageMsg': this
            };
            return msg;
        };
        return APIAddSimulatorBackupStorageMsg;
    }());
    ApiHeader.APIAddSimulatorBackupStorageMsg = APIAddSimulatorBackupStorageMsg;
    var APIListApplianceVmMsg = (function () {
        function APIListApplianceVmMsg() {
        }
        APIListApplianceVmMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.appliancevm.APIListApplianceVmMsg': this
            };
            return msg;
        };
        return APIListApplianceVmMsg;
    }());
    ApiHeader.APIListApplianceVmMsg = APIListApplianceVmMsg;
    var APIQueryApplianceVmMsg = (function () {
        function APIQueryApplianceVmMsg() {
        }
        APIQueryApplianceVmMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.appliancevm.APIQueryApplianceVmMsg': this
            };
            return msg;
        };
        return APIQueryApplianceVmMsg;
    }());
    ApiHeader.APIQueryApplianceVmMsg = APIQueryApplianceVmMsg;
    var APIAddIscsiFileSystemBackendPrimaryStorageMsg = (function () {
        function APIAddIscsiFileSystemBackendPrimaryStorageMsg() {
        }
        APIAddIscsiFileSystemBackendPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.primary.iscsi.APIAddIscsiFileSystemBackendPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIAddIscsiFileSystemBackendPrimaryStorageMsg;
    }());
    ApiHeader.APIAddIscsiFileSystemBackendPrimaryStorageMsg = APIAddIscsiFileSystemBackendPrimaryStorageMsg;
    var APIQueryIscsiFileSystemBackendPrimaryStorageMsg = (function () {
        function APIQueryIscsiFileSystemBackendPrimaryStorageMsg() {
        }
        APIQueryIscsiFileSystemBackendPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.primary.iscsi.APIQueryIscsiFileSystemBackendPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIQueryIscsiFileSystemBackendPrimaryStorageMsg;
    }());
    ApiHeader.APIQueryIscsiFileSystemBackendPrimaryStorageMsg = APIQueryIscsiFileSystemBackendPrimaryStorageMsg;
    var APIUpdateIscsiFileSystemBackendPrimaryStorageMsg = (function () {
        function APIUpdateIscsiFileSystemBackendPrimaryStorageMsg() {
        }
        APIUpdateIscsiFileSystemBackendPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.primary.iscsi.APIUpdateIscsiFileSystemBackendPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIUpdateIscsiFileSystemBackendPrimaryStorageMsg;
    }());
    ApiHeader.APIUpdateIscsiFileSystemBackendPrimaryStorageMsg = APIUpdateIscsiFileSystemBackendPrimaryStorageMsg;
    var APIAddLocalPrimaryStorageMsg = (function () {
        function APIAddLocalPrimaryStorageMsg() {
        }
        APIAddLocalPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.primary.local.APIAddLocalPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIAddLocalPrimaryStorageMsg;
    }());
    ApiHeader.APIAddLocalPrimaryStorageMsg = APIAddLocalPrimaryStorageMsg;
    var APIAddSharedMountPointPrimaryStorageMsg = (function () {
        function APIAddSharedMountPointPrimaryStorageMsg() {
        }
        APIAddSharedMountPointPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.primary.smp.APIAddSharedMountPointPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIAddSharedMountPointPrimaryStorageMsg;
    }());
    ApiHeader.APIAddSharedMountPointPrimaryStorageMsg = APIAddSharedMountPointPrimaryStorageMsg;
    var APIQueryCephPrimaryStorageMsg = (function () {
        function APIQueryCephPrimaryStorageMsg() {
        }
        APIQueryCephPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.ceph.primary.APIQueryCephPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIQueryCephPrimaryStorageMsg;
    }());
    ApiHeader.APIQueryCephPrimaryStorageMsg = APIQueryCephPrimaryStorageMsg;
    var APIAddCephPrimaryStorageMsg = (function () {
        function APIAddCephPrimaryStorageMsg() {
        }
        APIAddCephPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.ceph.primary.APIAddCephPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIAddCephPrimaryStorageMsg;
    }());
    ApiHeader.APIAddCephPrimaryStorageMsg = APIAddCephPrimaryStorageMsg;
    var APIAddMonToCephPrimaryStorageMsg = (function () {
        function APIAddMonToCephPrimaryStorageMsg() {
        }
        APIAddMonToCephPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.ceph.primary.APIAddMonToCephPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIAddMonToCephPrimaryStorageMsg;
    }());
    ApiHeader.APIAddMonToCephPrimaryStorageMsg = APIAddMonToCephPrimaryStorageMsg;
    var APIRemoveMonFromCephPrimaryStorageMsg = (function () {
        function APIRemoveMonFromCephPrimaryStorageMsg() {
        }
        APIRemoveMonFromCephPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.ceph.primary.APIRemoveMonFromCephPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIRemoveMonFromCephPrimaryStorageMsg;
    }());
    ApiHeader.APIRemoveMonFromCephPrimaryStorageMsg = APIRemoveMonFromCephPrimaryStorageMsg;
    var APIAddCephBackupStorageMsg = (function () {
        function APIAddCephBackupStorageMsg() {
        }
        APIAddCephBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.ceph.backup.APIAddCephBackupStorageMsg': this
            };
            return msg;
        };
        return APIAddCephBackupStorageMsg;
    }());
    ApiHeader.APIAddCephBackupStorageMsg = APIAddCephBackupStorageMsg;
    var APIAddMonToCephBackupStorageMsg = (function () {
        function APIAddMonToCephBackupStorageMsg() {
        }
        APIAddMonToCephBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.ceph.backup.APIAddMonToCephBackupStorageMsg': this
            };
            return msg;
        };
        return APIAddMonToCephBackupStorageMsg;
    }());
    ApiHeader.APIAddMonToCephBackupStorageMsg = APIAddMonToCephBackupStorageMsg;
    var APIQueryCephBackupStorageMsg = (function () {
        function APIQueryCephBackupStorageMsg() {
        }
        APIQueryCephBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.ceph.backup.APIQueryCephBackupStorageMsg': this
            };
            return msg;
        };
        return APIQueryCephBackupStorageMsg;
    }());
    ApiHeader.APIQueryCephBackupStorageMsg = APIQueryCephBackupStorageMsg;
    var APIRemoveMonFromCephBackupStorageMsg = (function () {
        function APIRemoveMonFromCephBackupStorageMsg() {
        }
        APIRemoveMonFromCephBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.ceph.backup.APIRemoveMonFromCephBackupStorageMsg': this
            };
            return msg;
        };
        return APIRemoveMonFromCephBackupStorageMsg;
    }());
    ApiHeader.APIRemoveMonFromCephBackupStorageMsg = APIRemoveMonFromCephBackupStorageMsg;
    var APIQueryFusionstorPrimaryStorageMsg = (function () {
        function APIQueryFusionstorPrimaryStorageMsg() {
        }
        APIQueryFusionstorPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.fusionstor.primary.APIQueryFusionstorPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIQueryFusionstorPrimaryStorageMsg;
    }());
    ApiHeader.APIQueryFusionstorPrimaryStorageMsg = APIQueryFusionstorPrimaryStorageMsg;
    var APIAddFusionstorPrimaryStorageMsg = (function () {
        function APIAddFusionstorPrimaryStorageMsg() {
        }
        APIAddFusionstorPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.fusionstor.primary.APIAddFusionstorPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIAddFusionstorPrimaryStorageMsg;
    }());
    ApiHeader.APIAddFusionstorPrimaryStorageMsg = APIAddFusionstorPrimaryStorageMsg;
    var APIAddMonToFusionstorPrimaryStorageMsg = (function () {
        function APIAddMonToFusionstorPrimaryStorageMsg() {
        }
        APIAddMonToFusionstorPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.fusionstor.primary.APIAddMonToFusionstorPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIAddMonToFusionstorPrimaryStorageMsg;
    }());
    ApiHeader.APIAddMonToFusionstorPrimaryStorageMsg = APIAddMonToFusionstorPrimaryStorageMsg;
    var APIRemoveMonFromFusionstorPrimaryStorageMsg = (function () {
        function APIRemoveMonFromFusionstorPrimaryStorageMsg() {
        }
        APIRemoveMonFromFusionstorPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.fusionstor.primary.APIRemoveMonFromFusionstorPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIRemoveMonFromFusionstorPrimaryStorageMsg;
    }());
    ApiHeader.APIRemoveMonFromFusionstorPrimaryStorageMsg = APIRemoveMonFromFusionstorPrimaryStorageMsg;
    var APIAddFusionstorBackupStorageMsg = (function () {
        function APIAddFusionstorBackupStorageMsg() {
        }
        APIAddFusionstorBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.fusionstor.backup.APIAddFusionstorBackupStorageMsg': this
            };
            return msg;
        };
        return APIAddFusionstorBackupStorageMsg;
    }());
    ApiHeader.APIAddFusionstorBackupStorageMsg = APIAddFusionstorBackupStorageMsg;
    var APIAddMonToFusionstorBackupStorageMsg = (function () {
        function APIAddMonToFusionstorBackupStorageMsg() {
        }
        APIAddMonToFusionstorBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.fusionstor.backup.APIAddMonToFusionstorBackupStorageMsg': this
            };
            return msg;
        };
        return APIAddMonToFusionstorBackupStorageMsg;
    }());
    ApiHeader.APIAddMonToFusionstorBackupStorageMsg = APIAddMonToFusionstorBackupStorageMsg;
    var APIQueryFusionstorBackupStorageMsg = (function () {
        function APIQueryFusionstorBackupStorageMsg() {
        }
        APIQueryFusionstorBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.fusionstor.backup.APIQueryFusionstorBackupStorageMsg': this
            };
            return msg;
        };
        return APIQueryFusionstorBackupStorageMsg;
    }());
    ApiHeader.APIQueryFusionstorBackupStorageMsg = APIQueryFusionstorBackupStorageMsg;
    var APIRemoveMonFromFusionstorBackupStorageMsg = (function () {
        function APIRemoveMonFromFusionstorBackupStorageMsg() {
        }
        APIRemoveMonFromFusionstorBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.fusionstor.backup.APIRemoveMonFromFusionstorBackupStorageMsg': this
            };
            return msg;
        };
        return APIRemoveMonFromFusionstorBackupStorageMsg;
    }());
    ApiHeader.APIRemoveMonFromFusionstorBackupStorageMsg = APIRemoveMonFromFusionstorBackupStorageMsg;
    var APIUpdateKVMHostMsg = (function () {
        function APIUpdateKVMHostMsg() {
        }
        APIUpdateKVMHostMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.kvm.APIUpdateKVMHostMsg': this
            };
            return msg;
        };
        return APIUpdateKVMHostMsg;
    }());
    ApiHeader.APIUpdateKVMHostMsg = APIUpdateKVMHostMsg;
    var APIAddKVMHostMsg = (function () {
        function APIAddKVMHostMsg() {
        }
        APIAddKVMHostMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.kvm.APIAddKVMHostMsg': this
            };
            return msg;
        };
        return APIAddKVMHostMsg;
    }());
    ApiHeader.APIAddKVMHostMsg = APIAddKVMHostMsg;
    var APIAddNfsPrimaryStorageMsg = (function () {
        function APIAddNfsPrimaryStorageMsg() {
        }
        APIAddNfsPrimaryStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.primary.nfs.APIAddNfsPrimaryStorageMsg': this
            };
            return msg;
        };
        return APIAddNfsPrimaryStorageMsg;
    }());
    ApiHeader.APIAddNfsPrimaryStorageMsg = APIAddNfsPrimaryStorageMsg;
    var APIGetSftpBackupStorageMsg = (function () {
        function APIGetSftpBackupStorageMsg() {
        }
        APIGetSftpBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.backup.sftp.APIGetSftpBackupStorageMsg': this
            };
            return msg;
        };
        return APIGetSftpBackupStorageMsg;
    }());
    ApiHeader.APIGetSftpBackupStorageMsg = APIGetSftpBackupStorageMsg;
    var APISearchSftpBackupStorageMsg = (function () {
        function APISearchSftpBackupStorageMsg() {
        }
        APISearchSftpBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.backup.sftp.APISearchSftpBackupStorageMsg': this
            };
            return msg;
        };
        return APISearchSftpBackupStorageMsg;
    }());
    ApiHeader.APISearchSftpBackupStorageMsg = APISearchSftpBackupStorageMsg;
    var APIQuerySftpBackupStorageMsg = (function () {
        function APIQuerySftpBackupStorageMsg() {
        }
        APIQuerySftpBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.backup.sftp.APIQuerySftpBackupStorageMsg': this
            };
            return msg;
        };
        return APIQuerySftpBackupStorageMsg;
    }());
    ApiHeader.APIQuerySftpBackupStorageMsg = APIQuerySftpBackupStorageMsg;
    var APIReconnectSftpBackupStorageMsg = (function () {
        function APIReconnectSftpBackupStorageMsg() {
        }
        APIReconnectSftpBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.backup.sftp.APIReconnectSftpBackupStorageMsg': this
            };
            return msg;
        };
        return APIReconnectSftpBackupStorageMsg;
    }());
    ApiHeader.APIReconnectSftpBackupStorageMsg = APIReconnectSftpBackupStorageMsg;
    var APIUpdateSftpBackupStorageMsg = (function () {
        function APIUpdateSftpBackupStorageMsg() {
        }
        APIUpdateSftpBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.backup.sftp.APIUpdateSftpBackupStorageMsg': this
            };
            return msg;
        };
        return APIUpdateSftpBackupStorageMsg;
    }());
    ApiHeader.APIUpdateSftpBackupStorageMsg = APIUpdateSftpBackupStorageMsg;
    var APIAddSftpBackupStorageMsg = (function () {
        function APIAddSftpBackupStorageMsg() {
        }
        APIAddSftpBackupStorageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.storage.backup.sftp.APIAddSftpBackupStorageMsg': this
            };
            return msg;
        };
        return APIAddSftpBackupStorageMsg;
    }());
    ApiHeader.APIAddSftpBackupStorageMsg = APIAddSftpBackupStorageMsg;
    var APIReconnectVirtualRouterMsg = (function () {
        function APIReconnectVirtualRouterMsg() {
        }
        APIReconnectVirtualRouterMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.virtualrouter.APIReconnectVirtualRouterMsg': this
            };
            return msg;
        };
        return APIReconnectVirtualRouterMsg;
    }());
    ApiHeader.APIReconnectVirtualRouterMsg = APIReconnectVirtualRouterMsg;
    var APICreateVirtualRouterVmMsg = (function () {
        function APICreateVirtualRouterVmMsg() {
        }
        APICreateVirtualRouterVmMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.virtualrouter.APICreateVirtualRouterVmMsg': this
            };
            return msg;
        };
        return APICreateVirtualRouterVmMsg;
    }());
    ApiHeader.APICreateVirtualRouterVmMsg = APICreateVirtualRouterVmMsg;
    var APIGetVirtualRouterOfferingMsg = (function () {
        function APIGetVirtualRouterOfferingMsg() {
        }
        APIGetVirtualRouterOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.virtualrouter.APIGetVirtualRouterOfferingMsg': this
            };
            return msg;
        };
        return APIGetVirtualRouterOfferingMsg;
    }());
    ApiHeader.APIGetVirtualRouterOfferingMsg = APIGetVirtualRouterOfferingMsg;
    var APISearchVirtualRouterVmMsg = (function () {
        function APISearchVirtualRouterVmMsg() {
        }
        APISearchVirtualRouterVmMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.virtualrouter.APISearchVirtualRouterVmMsg': this
            };
            return msg;
        };
        return APISearchVirtualRouterVmMsg;
    }());
    ApiHeader.APISearchVirtualRouterVmMsg = APISearchVirtualRouterVmMsg;
    var APIQueryVirtualRouterOfferingMsg = (function () {
        function APIQueryVirtualRouterOfferingMsg() {
        }
        APIQueryVirtualRouterOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.virtualrouter.APIQueryVirtualRouterOfferingMsg': this
            };
            return msg;
        };
        return APIQueryVirtualRouterOfferingMsg;
    }());
    ApiHeader.APIQueryVirtualRouterOfferingMsg = APIQueryVirtualRouterOfferingMsg;
    var APICreateVirtualRouterOfferingMsg = (function () {
        function APICreateVirtualRouterOfferingMsg() {
        }
        APICreateVirtualRouterOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.virtualrouter.APICreateVirtualRouterOfferingMsg': this
            };
            return msg;
        };
        return APICreateVirtualRouterOfferingMsg;
    }());
    ApiHeader.APICreateVirtualRouterOfferingMsg = APICreateVirtualRouterOfferingMsg;
    var APIQueryVirtualRouterVmMsg = (function () {
        function APIQueryVirtualRouterVmMsg() {
        }
        APIQueryVirtualRouterVmMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.virtualrouter.APIQueryVirtualRouterVmMsg': this
            };
            return msg;
        };
        return APIQueryVirtualRouterVmMsg;
    }());
    ApiHeader.APIQueryVirtualRouterVmMsg = APIQueryVirtualRouterVmMsg;
    var APISearchVirtualRouterOffingMsg = (function () {
        function APISearchVirtualRouterOffingMsg() {
        }
        APISearchVirtualRouterOffingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.virtualrouter.APISearchVirtualRouterOffingMsg': this
            };
            return msg;
        };
        return APISearchVirtualRouterOffingMsg;
    }());
    ApiHeader.APISearchVirtualRouterOffingMsg = APISearchVirtualRouterOffingMsg;
    var APIUpdateVirtualRouterOfferingMsg = (function () {
        function APIUpdateVirtualRouterOfferingMsg() {
        }
        APIUpdateVirtualRouterOfferingMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.virtualrouter.APIUpdateVirtualRouterOfferingMsg': this
            };
            return msg;
        };
        return APIUpdateVirtualRouterOfferingMsg;
    }());
    ApiHeader.APIUpdateVirtualRouterOfferingMsg = APIUpdateVirtualRouterOfferingMsg;
    var APIAttachPortForwardingRuleMsg = (function () {
        function APIAttachPortForwardingRuleMsg() {
        }
        APIAttachPortForwardingRuleMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.portforwarding.APIAttachPortForwardingRuleMsg': this
            };
            return msg;
        };
        return APIAttachPortForwardingRuleMsg;
    }());
    ApiHeader.APIAttachPortForwardingRuleMsg = APIAttachPortForwardingRuleMsg;
    var APIDetachPortForwardingRuleMsg = (function () {
        function APIDetachPortForwardingRuleMsg() {
        }
        APIDetachPortForwardingRuleMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.portforwarding.APIDetachPortForwardingRuleMsg': this
            };
            return msg;
        };
        return APIDetachPortForwardingRuleMsg;
    }());
    ApiHeader.APIDetachPortForwardingRuleMsg = APIDetachPortForwardingRuleMsg;
    var APIGetPortForwardingAttachableVmNicsMsg = (function () {
        function APIGetPortForwardingAttachableVmNicsMsg() {
        }
        APIGetPortForwardingAttachableVmNicsMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.portforwarding.APIGetPortForwardingAttachableVmNicsMsg': this
            };
            return msg;
        };
        return APIGetPortForwardingAttachableVmNicsMsg;
    }());
    ApiHeader.APIGetPortForwardingAttachableVmNicsMsg = APIGetPortForwardingAttachableVmNicsMsg;
    var APIChangePortForwardingRuleStateMsg = (function () {
        function APIChangePortForwardingRuleStateMsg() {
        }
        APIChangePortForwardingRuleStateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.portforwarding.APIChangePortForwardingRuleStateMsg': this
            };
            return msg;
        };
        return APIChangePortForwardingRuleStateMsg;
    }());
    ApiHeader.APIChangePortForwardingRuleStateMsg = APIChangePortForwardingRuleStateMsg;
    var APIUpdatePortForwardingRuleMsg = (function () {
        function APIUpdatePortForwardingRuleMsg() {
        }
        APIUpdatePortForwardingRuleMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.portforwarding.APIUpdatePortForwardingRuleMsg': this
            };
            return msg;
        };
        return APIUpdatePortForwardingRuleMsg;
    }());
    ApiHeader.APIUpdatePortForwardingRuleMsg = APIUpdatePortForwardingRuleMsg;
    var APIListPortForwardingRuleMsg = (function () {
        function APIListPortForwardingRuleMsg() {
        }
        APIListPortForwardingRuleMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.portforwarding.APIListPortForwardingRuleMsg': this
            };
            return msg;
        };
        return APIListPortForwardingRuleMsg;
    }());
    ApiHeader.APIListPortForwardingRuleMsg = APIListPortForwardingRuleMsg;
    var APICreatePortForwardingRuleMsg = (function () {
        function APICreatePortForwardingRuleMsg() {
        }
        APICreatePortForwardingRuleMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.portforwarding.APICreatePortForwardingRuleMsg': this
            };
            return msg;
        };
        return APICreatePortForwardingRuleMsg;
    }());
    ApiHeader.APICreatePortForwardingRuleMsg = APICreatePortForwardingRuleMsg;
    var APIQueryPortForwardingRuleMsg = (function () {
        function APIQueryPortForwardingRuleMsg() {
        }
        APIQueryPortForwardingRuleMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.portforwarding.APIQueryPortForwardingRuleMsg': this
            };
            return msg;
        };
        return APIQueryPortForwardingRuleMsg;
    }());
    ApiHeader.APIQueryPortForwardingRuleMsg = APIQueryPortForwardingRuleMsg;
    var APIDeletePortForwardingRuleMsg = (function () {
        function APIDeletePortForwardingRuleMsg() {
        }
        APIDeletePortForwardingRuleMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.portforwarding.APIDeletePortForwardingRuleMsg': this
            };
            return msg;
        };
        return APIDeletePortForwardingRuleMsg;
    }());
    ApiHeader.APIDeletePortForwardingRuleMsg = APIDeletePortForwardingRuleMsg;
    var APIDetachEipMsg = (function () {
        function APIDetachEipMsg() {
        }
        APIDetachEipMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.eip.APIDetachEipMsg': this
            };
            return msg;
        };
        return APIDetachEipMsg;
    }());
    ApiHeader.APIDetachEipMsg = APIDetachEipMsg;
    var APIGetEipAttachableVmNicsMsg = (function () {
        function APIGetEipAttachableVmNicsMsg() {
        }
        APIGetEipAttachableVmNicsMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.eip.APIGetEipAttachableVmNicsMsg': this
            };
            return msg;
        };
        return APIGetEipAttachableVmNicsMsg;
    }());
    ApiHeader.APIGetEipAttachableVmNicsMsg = APIGetEipAttachableVmNicsMsg;
    var APIUpdateEipMsg = (function () {
        function APIUpdateEipMsg() {
        }
        APIUpdateEipMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.eip.APIUpdateEipMsg': this
            };
            return msg;
        };
        return APIUpdateEipMsg;
    }());
    ApiHeader.APIUpdateEipMsg = APIUpdateEipMsg;
    var APIQueryEipMsg = (function () {
        function APIQueryEipMsg() {
        }
        APIQueryEipMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.eip.APIQueryEipMsg': this
            };
            return msg;
        };
        return APIQueryEipMsg;
    }());
    ApiHeader.APIQueryEipMsg = APIQueryEipMsg;
    var APIChangeEipStateMsg = (function () {
        function APIChangeEipStateMsg() {
        }
        APIChangeEipStateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.eip.APIChangeEipStateMsg': this
            };
            return msg;
        };
        return APIChangeEipStateMsg;
    }());
    ApiHeader.APIChangeEipStateMsg = APIChangeEipStateMsg;
    var APIDeleteEipMsg = (function () {
        function APIDeleteEipMsg() {
        }
        APIDeleteEipMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.eip.APIDeleteEipMsg': this
            };
            return msg;
        };
        return APIDeleteEipMsg;
    }());
    ApiHeader.APIDeleteEipMsg = APIDeleteEipMsg;
    var APICreateEipMsg = (function () {
        function APICreateEipMsg() {
        }
        APICreateEipMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.eip.APICreateEipMsg': this
            };
            return msg;
        };
        return APICreateEipMsg;
    }());
    ApiHeader.APICreateEipMsg = APICreateEipMsg;
    var APIAttachEipMsg = (function () {
        function APIAttachEipMsg() {
        }
        APIAttachEipMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.eip.APIAttachEipMsg': this
            };
            return msg;
        };
        return APIAttachEipMsg;
    }());
    ApiHeader.APIAttachEipMsg = APIAttachEipMsg;
    var APIQueryLoadBalancerListenerMsg = (function () {
        function APIQueryLoadBalancerListenerMsg() {
        }
        APIQueryLoadBalancerListenerMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.lb.APIQueryLoadBalancerListenerMsg': this
            };
            return msg;
        };
        return APIQueryLoadBalancerListenerMsg;
    }());
    ApiHeader.APIQueryLoadBalancerListenerMsg = APIQueryLoadBalancerListenerMsg;
    var APIDeleteLoadBalancerMsg = (function () {
        function APIDeleteLoadBalancerMsg() {
        }
        APIDeleteLoadBalancerMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.lb.APIDeleteLoadBalancerMsg': this
            };
            return msg;
        };
        return APIDeleteLoadBalancerMsg;
    }());
    ApiHeader.APIDeleteLoadBalancerMsg = APIDeleteLoadBalancerMsg;
    var APICreateLoadBalancerListenerMsg = (function () {
        function APICreateLoadBalancerListenerMsg() {
        }
        APICreateLoadBalancerListenerMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.lb.APICreateLoadBalancerListenerMsg': this
            };
            return msg;
        };
        return APICreateLoadBalancerListenerMsg;
    }());
    ApiHeader.APICreateLoadBalancerListenerMsg = APICreateLoadBalancerListenerMsg;
    var APIRemoveVmNicFromLoadBalancerMsg = (function () {
        function APIRemoveVmNicFromLoadBalancerMsg() {
        }
        APIRemoveVmNicFromLoadBalancerMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.lb.APIRemoveVmNicFromLoadBalancerMsg': this
            };
            return msg;
        };
        return APIRemoveVmNicFromLoadBalancerMsg;
    }());
    ApiHeader.APIRemoveVmNicFromLoadBalancerMsg = APIRemoveVmNicFromLoadBalancerMsg;
    var APIAddVmNicToLoadBalancerMsg = (function () {
        function APIAddVmNicToLoadBalancerMsg() {
        }
        APIAddVmNicToLoadBalancerMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.lb.APIAddVmNicToLoadBalancerMsg': this
            };
            return msg;
        };
        return APIAddVmNicToLoadBalancerMsg;
    }());
    ApiHeader.APIAddVmNicToLoadBalancerMsg = APIAddVmNicToLoadBalancerMsg;
    var APICreateLoadBalancerMsg = (function () {
        function APICreateLoadBalancerMsg() {
        }
        APICreateLoadBalancerMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.lb.APICreateLoadBalancerMsg': this
            };
            return msg;
        };
        return APICreateLoadBalancerMsg;
    }());
    ApiHeader.APICreateLoadBalancerMsg = APICreateLoadBalancerMsg;
    var APIRefreshLoadBalancerMsg = (function () {
        function APIRefreshLoadBalancerMsg() {
        }
        APIRefreshLoadBalancerMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.lb.APIRefreshLoadBalancerMsg': this
            };
            return msg;
        };
        return APIRefreshLoadBalancerMsg;
    }());
    ApiHeader.APIRefreshLoadBalancerMsg = APIRefreshLoadBalancerMsg;
    var APIDeleteLoadBalancerListenerMsg = (function () {
        function APIDeleteLoadBalancerListenerMsg() {
        }
        APIDeleteLoadBalancerListenerMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.lb.APIDeleteLoadBalancerListenerMsg': this
            };
            return msg;
        };
        return APIDeleteLoadBalancerListenerMsg;
    }());
    ApiHeader.APIDeleteLoadBalancerListenerMsg = APIDeleteLoadBalancerListenerMsg;
    var APIQueryLoadBalancerMsg = (function () {
        function APIQueryLoadBalancerMsg() {
        }
        APIQueryLoadBalancerMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.lb.APIQueryLoadBalancerMsg': this
            };
            return msg;
        };
        return APIQueryLoadBalancerMsg;
    }());
    ApiHeader.APIQueryLoadBalancerMsg = APIQueryLoadBalancerMsg;
    var APIChangeSecurityGroupStateMsg = (function () {
        function APIChangeSecurityGroupStateMsg() {
        }
        APIChangeSecurityGroupStateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APIChangeSecurityGroupStateMsg': this
            };
            return msg;
        };
        return APIChangeSecurityGroupStateMsg;
    }());
    ApiHeader.APIChangeSecurityGroupStateMsg = APIChangeSecurityGroupStateMsg;
    var APIDetachSecurityGroupFromL3NetworkMsg = (function () {
        function APIDetachSecurityGroupFromL3NetworkMsg() {
        }
        APIDetachSecurityGroupFromL3NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APIDetachSecurityGroupFromL3NetworkMsg': this
            };
            return msg;
        };
        return APIDetachSecurityGroupFromL3NetworkMsg;
    }());
    ApiHeader.APIDetachSecurityGroupFromL3NetworkMsg = APIDetachSecurityGroupFromL3NetworkMsg;
    var APIDeleteSecurityGroupRuleMsg = (function () {
        function APIDeleteSecurityGroupRuleMsg() {
        }
        APIDeleteSecurityGroupRuleMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APIDeleteSecurityGroupRuleMsg': this
            };
            return msg;
        };
        return APIDeleteSecurityGroupRuleMsg;
    }());
    ApiHeader.APIDeleteSecurityGroupRuleMsg = APIDeleteSecurityGroupRuleMsg;
    var APICreateSecurityGroupMsg = (function () {
        function APICreateSecurityGroupMsg() {
        }
        APICreateSecurityGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APICreateSecurityGroupMsg': this
            };
            return msg;
        };
        return APICreateSecurityGroupMsg;
    }());
    ApiHeader.APICreateSecurityGroupMsg = APICreateSecurityGroupMsg;
    var APIListVmNicInSecurityGroupMsg = (function () {
        function APIListVmNicInSecurityGroupMsg() {
        }
        APIListVmNicInSecurityGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APIListVmNicInSecurityGroupMsg': this
            };
            return msg;
        };
        return APIListVmNicInSecurityGroupMsg;
    }());
    ApiHeader.APIListVmNicInSecurityGroupMsg = APIListVmNicInSecurityGroupMsg;
    var APIQueryVmNicInSecurityGroupMsg = (function () {
        function APIQueryVmNicInSecurityGroupMsg() {
        }
        APIQueryVmNicInSecurityGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APIQueryVmNicInSecurityGroupMsg': this
            };
            return msg;
        };
        return APIQueryVmNicInSecurityGroupMsg;
    }());
    ApiHeader.APIQueryVmNicInSecurityGroupMsg = APIQueryVmNicInSecurityGroupMsg;
    var APIQuerySecurityGroupMsg = (function () {
        function APIQuerySecurityGroupMsg() {
        }
        APIQuerySecurityGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APIQuerySecurityGroupMsg': this
            };
            return msg;
        };
        return APIQuerySecurityGroupMsg;
    }());
    ApiHeader.APIQuerySecurityGroupMsg = APIQuerySecurityGroupMsg;
    var SecurityGroupRuleAO = (function () {
        function SecurityGroupRuleAO() {
        }
        return SecurityGroupRuleAO;
    }());
    ApiHeader.SecurityGroupRuleAO = SecurityGroupRuleAO;
    var APIAddSecurityGroupRuleMsg = (function () {
        function APIAddSecurityGroupRuleMsg() {
        }
        APIAddSecurityGroupRuleMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APIAddSecurityGroupRuleMsg': this
            };
            return msg;
        };
        return APIAddSecurityGroupRuleMsg;
    }());
    ApiHeader.APIAddSecurityGroupRuleMsg = APIAddSecurityGroupRuleMsg;
    var APIListSecurityGroupMsg = (function () {
        function APIListSecurityGroupMsg() {
        }
        APIListSecurityGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APIListSecurityGroupMsg': this
            };
            return msg;
        };
        return APIListSecurityGroupMsg;
    }());
    ApiHeader.APIListSecurityGroupMsg = APIListSecurityGroupMsg;
    var APIQuerySecurityGroupRuleMsg = (function () {
        function APIQuerySecurityGroupRuleMsg() {
        }
        APIQuerySecurityGroupRuleMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APIQuerySecurityGroupRuleMsg': this
            };
            return msg;
        };
        return APIQuerySecurityGroupRuleMsg;
    }());
    ApiHeader.APIQuerySecurityGroupRuleMsg = APIQuerySecurityGroupRuleMsg;
    var APIDeleteSecurityGroupMsg = (function () {
        function APIDeleteSecurityGroupMsg() {
        }
        APIDeleteSecurityGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APIDeleteSecurityGroupMsg': this
            };
            return msg;
        };
        return APIDeleteSecurityGroupMsg;
    }());
    ApiHeader.APIDeleteSecurityGroupMsg = APIDeleteSecurityGroupMsg;
    var APIUpdateSecurityGroupMsg = (function () {
        function APIUpdateSecurityGroupMsg() {
        }
        APIUpdateSecurityGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APIUpdateSecurityGroupMsg': this
            };
            return msg;
        };
        return APIUpdateSecurityGroupMsg;
    }());
    ApiHeader.APIUpdateSecurityGroupMsg = APIUpdateSecurityGroupMsg;
    var APIDeleteVmNicFromSecurityGroupMsg = (function () {
        function APIDeleteVmNicFromSecurityGroupMsg() {
        }
        APIDeleteVmNicFromSecurityGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APIDeleteVmNicFromSecurityGroupMsg': this
            };
            return msg;
        };
        return APIDeleteVmNicFromSecurityGroupMsg;
    }());
    ApiHeader.APIDeleteVmNicFromSecurityGroupMsg = APIDeleteVmNicFromSecurityGroupMsg;
    var APIGetCandidateVmNicForSecurityGroupMsg = (function () {
        function APIGetCandidateVmNicForSecurityGroupMsg() {
        }
        APIGetCandidateVmNicForSecurityGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APIGetCandidateVmNicForSecurityGroupMsg': this
            };
            return msg;
        };
        return APIGetCandidateVmNicForSecurityGroupMsg;
    }());
    ApiHeader.APIGetCandidateVmNicForSecurityGroupMsg = APIGetCandidateVmNicForSecurityGroupMsg;
    var APIAttachSecurityGroupToL3NetworkMsg = (function () {
        function APIAttachSecurityGroupToL3NetworkMsg() {
        }
        APIAttachSecurityGroupToL3NetworkMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APIAttachSecurityGroupToL3NetworkMsg': this
            };
            return msg;
        };
        return APIAttachSecurityGroupToL3NetworkMsg;
    }());
    ApiHeader.APIAttachSecurityGroupToL3NetworkMsg = APIAttachSecurityGroupToL3NetworkMsg;
    var APIAddVmNicToSecurityGroupMsg = (function () {
        function APIAddVmNicToSecurityGroupMsg() {
        }
        APIAddVmNicToSecurityGroupMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.securitygroup.APIAddVmNicToSecurityGroupMsg': this
            };
            return msg;
        };
        return APIAddVmNicToSecurityGroupMsg;
    }());
    ApiHeader.APIAddVmNicToSecurityGroupMsg = APIAddVmNicToSecurityGroupMsg;
    var APIDeleteVipMsg = (function () {
        function APIDeleteVipMsg() {
        }
        APIDeleteVipMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.vip.APIDeleteVipMsg': this
            };
            return msg;
        };
        return APIDeleteVipMsg;
    }());
    ApiHeader.APIDeleteVipMsg = APIDeleteVipMsg;
    var APIUpdateVipMsg = (function () {
        function APIUpdateVipMsg() {
        }
        APIUpdateVipMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.vip.APIUpdateVipMsg': this
            };
            return msg;
        };
        return APIUpdateVipMsg;
    }());
    ApiHeader.APIUpdateVipMsg = APIUpdateVipMsg;
    var APIChangeVipStateMsg = (function () {
        function APIChangeVipStateMsg() {
        }
        APIChangeVipStateMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.vip.APIChangeVipStateMsg': this
            };
            return msg;
        };
        return APIChangeVipStateMsg;
    }());
    ApiHeader.APIChangeVipStateMsg = APIChangeVipStateMsg;
    var APICreateVipMsg = (function () {
        function APICreateVipMsg() {
        }
        APICreateVipMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.vip.APICreateVipMsg': this
            };
            return msg;
        };
        return APICreateVipMsg;
    }());
    ApiHeader.APICreateVipMsg = APICreateVipMsg;
    var APIQueryVipMsg = (function () {
        function APIQueryVipMsg() {
        }
        APIQueryVipMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.network.service.vip.APIQueryVipMsg': this
            };
            return msg;
        };
        return APIQueryVipMsg;
    }());
    ApiHeader.APIQueryVipMsg = APIQueryVipMsg;
    var ErrorCode = (function () {
        function ErrorCode() {
        }
        return ErrorCode;
    }());
    ApiHeader.ErrorCode = ErrorCode;
    var FakeApiEvent = (function () {
        function FakeApiEvent() {
        }
        return FakeApiEvent;
    }());
    ApiHeader.FakeApiEvent = FakeApiEvent;
    var GlobalConfigInventory = (function () {
        function GlobalConfigInventory() {
        }
        return GlobalConfigInventory;
    }());
    ApiHeader.GlobalConfigInventory = GlobalConfigInventory;
    var APIUpdateGlobalConfigEvent = (function () {
        function APIUpdateGlobalConfigEvent() {
        }
        return APIUpdateGlobalConfigEvent;
    }());
    ApiHeader.APIUpdateGlobalConfigEvent = APIUpdateGlobalConfigEvent;
    var InProgressEvent = (function () {
        function InProgressEvent() {
        }
        return InProgressEvent;
    }());
    ApiHeader.InProgressEvent = InProgressEvent;
    var FixedInProgressEvent = (function () {
        function FixedInProgressEvent() {
        }
        return FixedInProgressEvent;
    }());
    ApiHeader.FixedInProgressEvent = FixedInProgressEvent;
    var APIGenerateInventoryQueryDetailsEvent = (function () {
        function APIGenerateInventoryQueryDetailsEvent() {
        }
        return APIGenerateInventoryQueryDetailsEvent;
    }());
    ApiHeader.APIGenerateInventoryQueryDetailsEvent = APIGenerateInventoryQueryDetailsEvent;
    var APIGenerateQueryableFieldsEvent = (function () {
        function APIGenerateQueryableFieldsEvent() {
        }
        return APIGenerateQueryableFieldsEvent;
    }());
    ApiHeader.APIGenerateQueryableFieldsEvent = APIGenerateQueryableFieldsEvent;
    var VmNicInventory = (function () {
        function VmNicInventory() {
        }
        return VmNicInventory;
    }());
    ApiHeader.VmNicInventory = VmNicInventory;
    var VolumeInventory = (function () {
        function VolumeInventory() {
        }
        return VolumeInventory;
    }());
    ApiHeader.VolumeInventory = VolumeInventory;
    var VmInstanceInventory = (function () {
        function VmInstanceInventory() {
        }
        return VmInstanceInventory;
    }());
    ApiHeader.VmInstanceInventory = VmInstanceInventory;
    var APIDetachL3NetworkFromVmEvent = (function () {
        function APIDetachL3NetworkFromVmEvent() {
        }
        return APIDetachL3NetworkFromVmEvent;
    }());
    ApiHeader.APIDetachL3NetworkFromVmEvent = APIDetachL3NetworkFromVmEvent;
    var APIStartVmInstanceEvent = (function () {
        function APIStartVmInstanceEvent() {
        }
        return APIStartVmInstanceEvent;
    }());
    ApiHeader.APIStartVmInstanceEvent = APIStartVmInstanceEvent;
    var APIAttachL3NetworkToVmEvent = (function () {
        function APIAttachL3NetworkToVmEvent() {
        }
        return APIAttachL3NetworkToVmEvent;
    }());
    ApiHeader.APIAttachL3NetworkToVmEvent = APIAttachL3NetworkToVmEvent;
    var APIStopVmInstanceEvent = (function () {
        function APIStopVmInstanceEvent() {
        }
        return APIStopVmInstanceEvent;
    }());
    ApiHeader.APIStopVmInstanceEvent = APIStopVmInstanceEvent;
    var APIMigrateVmEvent = (function () {
        function APIMigrateVmEvent() {
        }
        return APIMigrateVmEvent;
    }());
    ApiHeader.APIMigrateVmEvent = APIMigrateVmEvent;
    var APIUpdateVmInstanceEvent = (function () {
        function APIUpdateVmInstanceEvent() {
        }
        return APIUpdateVmInstanceEvent;
    }());
    ApiHeader.APIUpdateVmInstanceEvent = APIUpdateVmInstanceEvent;
    var APIDestroyVmInstanceEvent = (function () {
        function APIDestroyVmInstanceEvent() {
        }
        return APIDestroyVmInstanceEvent;
    }());
    ApiHeader.APIDestroyVmInstanceEvent = APIDestroyVmInstanceEvent;
    var APIChangeInstanceOfferingEvent = (function () {
        function APIChangeInstanceOfferingEvent() {
        }
        return APIChangeInstanceOfferingEvent;
    }());
    ApiHeader.APIChangeInstanceOfferingEvent = APIChangeInstanceOfferingEvent;
    var APICreateVmInstanceEvent = (function () {
        function APICreateVmInstanceEvent() {
        }
        return APICreateVmInstanceEvent;
    }());
    ApiHeader.APICreateVmInstanceEvent = APICreateVmInstanceEvent;
    var APIRebootVmInstanceEvent = (function () {
        function APIRebootVmInstanceEvent() {
        }
        return APIRebootVmInstanceEvent;
    }());
    ApiHeader.APIRebootVmInstanceEvent = APIRebootVmInstanceEvent;
    var ImageBackupStorageRefInventory = (function () {
        function ImageBackupStorageRefInventory() {
        }
        return ImageBackupStorageRefInventory;
    }());
    ApiHeader.ImageBackupStorageRefInventory = ImageBackupStorageRefInventory;
    var ImageInventory = (function () {
        function ImageInventory() {
        }
        return ImageInventory;
    }());
    ApiHeader.ImageInventory = ImageInventory;
    var APICreateRootVolumeTemplateFromRootVolumeEvent = (function () {
        function APICreateRootVolumeTemplateFromRootVolumeEvent() {
        }
        return APICreateRootVolumeTemplateFromRootVolumeEvent;
    }());
    ApiHeader.APICreateRootVolumeTemplateFromRootVolumeEvent = APICreateRootVolumeTemplateFromRootVolumeEvent;
    var APIChangeImageStateEvent = (function () {
        function APIChangeImageStateEvent() {
        }
        return APIChangeImageStateEvent;
    }());
    ApiHeader.APIChangeImageStateEvent = APIChangeImageStateEvent;
    var APIUpdateImageEvent = (function () {
        function APIUpdateImageEvent() {
        }
        return APIUpdateImageEvent;
    }());
    ApiHeader.APIUpdateImageEvent = APIUpdateImageEvent;
    var APICreateDataVolumeTemplateFromVolumeEvent = (function () {
        function APICreateDataVolumeTemplateFromVolumeEvent() {
        }
        return APICreateDataVolumeTemplateFromVolumeEvent;
    }());
    ApiHeader.APICreateDataVolumeTemplateFromVolumeEvent = APICreateDataVolumeTemplateFromVolumeEvent;
    var APICreateRootVolumeTemplateFromVolumeSnapshotEvent = (function () {
        function APICreateRootVolumeTemplateFromVolumeSnapshotEvent() {
        }
        return APICreateRootVolumeTemplateFromVolumeSnapshotEvent;
    }());
    ApiHeader.APICreateRootVolumeTemplateFromVolumeSnapshotEvent = APICreateRootVolumeTemplateFromVolumeSnapshotEvent;
    var APIAddImageEvent = (function () {
        function APIAddImageEvent() {
        }
        return APIAddImageEvent;
    }());
    ApiHeader.APIAddImageEvent = APIAddImageEvent;
    var APIDeleteImageEvent = (function () {
        function APIDeleteImageEvent() {
        }
        return APIDeleteImageEvent;
    }());
    ApiHeader.APIDeleteImageEvent = APIDeleteImageEvent;
    var ConsoleInventory = (function () {
        function ConsoleInventory() {
        }
        return ConsoleInventory;
    }());
    ApiHeader.ConsoleInventory = ConsoleInventory;
    var APIRequestConsoleAccessEvent = (function () {
        function APIRequestConsoleAccessEvent() {
        }
        return APIRequestConsoleAccessEvent;
    }());
    ApiHeader.APIRequestConsoleAccessEvent = APIRequestConsoleAccessEvent;
    var APICreateDataVolumeEvent = (function () {
        function APICreateDataVolumeEvent() {
        }
        return APICreateDataVolumeEvent;
    }());
    ApiHeader.APICreateDataVolumeEvent = APICreateDataVolumeEvent;
    var APIDetachDataVolumeFromVmEvent = (function () {
        function APIDetachDataVolumeFromVmEvent() {
        }
        return APIDetachDataVolumeFromVmEvent;
    }());
    ApiHeader.APIDetachDataVolumeFromVmEvent = APIDetachDataVolumeFromVmEvent;
    var APIUpdateVolumeEvent = (function () {
        function APIUpdateVolumeEvent() {
        }
        return APIUpdateVolumeEvent;
    }());
    ApiHeader.APIUpdateVolumeEvent = APIUpdateVolumeEvent;
    var APIDeleteDataVolumeEvent = (function () {
        function APIDeleteDataVolumeEvent() {
        }
        return APIDeleteDataVolumeEvent;
    }());
    ApiHeader.APIDeleteDataVolumeEvent = APIDeleteDataVolumeEvent;
    var APICreateDataVolumeFromVolumeSnapshotEvent = (function () {
        function APICreateDataVolumeFromVolumeSnapshotEvent() {
        }
        return APICreateDataVolumeFromVolumeSnapshotEvent;
    }());
    ApiHeader.APICreateDataVolumeFromVolumeSnapshotEvent = APICreateDataVolumeFromVolumeSnapshotEvent;
    var APIBackupDataVolumeEvent = (function () {
        function APIBackupDataVolumeEvent() {
        }
        return APIBackupDataVolumeEvent;
    }());
    ApiHeader.APIBackupDataVolumeEvent = APIBackupDataVolumeEvent;
    var APICreateDataVolumeFromVolumeTemplateEvent = (function () {
        function APICreateDataVolumeFromVolumeTemplateEvent() {
        }
        return APICreateDataVolumeFromVolumeTemplateEvent;
    }());
    ApiHeader.APICreateDataVolumeFromVolumeTemplateEvent = APICreateDataVolumeFromVolumeTemplateEvent;
    var APIChangeVolumeStateEvent = (function () {
        function APIChangeVolumeStateEvent() {
        }
        return APIChangeVolumeStateEvent;
    }());
    ApiHeader.APIChangeVolumeStateEvent = APIChangeVolumeStateEvent;
    var VolumeSnapshotBackupStorageRefInventory = (function () {
        function VolumeSnapshotBackupStorageRefInventory() {
        }
        return VolumeSnapshotBackupStorageRefInventory;
    }());
    ApiHeader.VolumeSnapshotBackupStorageRefInventory = VolumeSnapshotBackupStorageRefInventory;
    var VolumeSnapshotInventory = (function () {
        function VolumeSnapshotInventory() {
        }
        return VolumeSnapshotInventory;
    }());
    ApiHeader.VolumeSnapshotInventory = VolumeSnapshotInventory;
    var APICreateVolumeSnapshotEvent = (function () {
        function APICreateVolumeSnapshotEvent() {
        }
        return APICreateVolumeSnapshotEvent;
    }());
    ApiHeader.APICreateVolumeSnapshotEvent = APICreateVolumeSnapshotEvent;
    var APIAttachDataVolumeToVmEvent = (function () {
        function APIAttachDataVolumeToVmEvent() {
        }
        return APIAttachDataVolumeToVmEvent;
    }());
    ApiHeader.APIAttachDataVolumeToVmEvent = APIAttachDataVolumeToVmEvent;
    var DiskOfferingInventory = (function () {
        function DiskOfferingInventory() {
        }
        return DiskOfferingInventory;
    }());
    ApiHeader.DiskOfferingInventory = DiskOfferingInventory;
    var APICreateDiskOfferingEvent = (function () {
        function APICreateDiskOfferingEvent() {
        }
        return APICreateDiskOfferingEvent;
    }());
    ApiHeader.APICreateDiskOfferingEvent = APICreateDiskOfferingEvent;
    var APIChangeDiskOfferingStateEvent = (function () {
        function APIChangeDiskOfferingStateEvent() {
        }
        return APIChangeDiskOfferingStateEvent;
    }());
    ApiHeader.APIChangeDiskOfferingStateEvent = APIChangeDiskOfferingStateEvent;
    var APIUpdateDiskOfferingEvent = (function () {
        function APIUpdateDiskOfferingEvent() {
        }
        return APIUpdateDiskOfferingEvent;
    }());
    ApiHeader.APIUpdateDiskOfferingEvent = APIUpdateDiskOfferingEvent;
    var APIDeleteInstanceOfferingEvent = (function () {
        function APIDeleteInstanceOfferingEvent() {
        }
        return APIDeleteInstanceOfferingEvent;
    }());
    ApiHeader.APIDeleteInstanceOfferingEvent = APIDeleteInstanceOfferingEvent;
    var APIGenerateSqlForeignKeyEvent = (function () {
        function APIGenerateSqlForeignKeyEvent() {
        }
        return APIGenerateSqlForeignKeyEvent;
    }());
    ApiHeader.APIGenerateSqlForeignKeyEvent = APIGenerateSqlForeignKeyEvent;
    var APIDeleteDiskOfferingEvent = (function () {
        function APIDeleteDiskOfferingEvent() {
        }
        return APIDeleteDiskOfferingEvent;
    }());
    ApiHeader.APIDeleteDiskOfferingEvent = APIDeleteDiskOfferingEvent;
    var APIGenerateGroovyClassEvent = (function () {
        function APIGenerateGroovyClassEvent() {
        }
        return APIGenerateGroovyClassEvent;
    }());
    ApiHeader.APIGenerateGroovyClassEvent = APIGenerateGroovyClassEvent;
    var APIGenerateSqlIndexEvent = (function () {
        function APIGenerateSqlIndexEvent() {
        }
        return APIGenerateSqlIndexEvent;
    }());
    ApiHeader.APIGenerateSqlIndexEvent = APIGenerateSqlIndexEvent;
    var InstanceOfferingInventory = (function () {
        function InstanceOfferingInventory() {
        }
        return InstanceOfferingInventory;
    }());
    ApiHeader.InstanceOfferingInventory = InstanceOfferingInventory;
    var APIUpdateInstanceOfferingEvent = (function () {
        function APIUpdateInstanceOfferingEvent() {
        }
        return APIUpdateInstanceOfferingEvent;
    }());
    ApiHeader.APIUpdateInstanceOfferingEvent = APIUpdateInstanceOfferingEvent;
    var APIGenerateApiTypeScriptDefinitionEvent = (function () {
        function APIGenerateApiTypeScriptDefinitionEvent() {
        }
        return APIGenerateApiTypeScriptDefinitionEvent;
    }());
    ApiHeader.APIGenerateApiTypeScriptDefinitionEvent = APIGenerateApiTypeScriptDefinitionEvent;
    var APIGenerateSqlVOViewEvent = (function () {
        function APIGenerateSqlVOViewEvent() {
        }
        return APIGenerateSqlVOViewEvent;
    }());
    ApiHeader.APIGenerateSqlVOViewEvent = APIGenerateSqlVOViewEvent;
    var APICreateInstanceOfferingEvent = (function () {
        function APICreateInstanceOfferingEvent() {
        }
        return APICreateInstanceOfferingEvent;
    }());
    ApiHeader.APICreateInstanceOfferingEvent = APICreateInstanceOfferingEvent;
    var APIChangeInstanceOfferingStateEvent = (function () {
        function APIChangeInstanceOfferingStateEvent() {
        }
        return APIChangeInstanceOfferingStateEvent;
    }());
    ApiHeader.APIChangeInstanceOfferingStateEvent = APIChangeInstanceOfferingStateEvent;
    var APIGenerateTestLinkDocumentEvent = (function () {
        function APIGenerateTestLinkDocumentEvent() {
        }
        return APIGenerateTestLinkDocumentEvent;
    }());
    ApiHeader.APIGenerateTestLinkDocumentEvent = APIGenerateTestLinkDocumentEvent;
    var APIGenerateApiJsonTemplateEvent = (function () {
        function APIGenerateApiJsonTemplateEvent() {
        }
        return APIGenerateApiJsonTemplateEvent;
    }());
    ApiHeader.APIGenerateApiJsonTemplateEvent = APIGenerateApiJsonTemplateEvent;
    var PrimaryStorageInventory = (function () {
        function PrimaryStorageInventory() {
        }
        return PrimaryStorageInventory;
    }());
    ApiHeader.PrimaryStorageInventory = PrimaryStorageInventory;
    var APISyncPrimaryStorageCapacityEvent = (function () {
        function APISyncPrimaryStorageCapacityEvent() {
        }
        return APISyncPrimaryStorageCapacityEvent;
    }());
    ApiHeader.APISyncPrimaryStorageCapacityEvent = APISyncPrimaryStorageCapacityEvent;
    var APIDeletePrimaryStorageEvent = (function () {
        function APIDeletePrimaryStorageEvent() {
        }
        return APIDeletePrimaryStorageEvent;
    }());
    ApiHeader.APIDeletePrimaryStorageEvent = APIDeletePrimaryStorageEvent;
    var APIDetachPrimaryStorageFromClusterEvent = (function () {
        function APIDetachPrimaryStorageFromClusterEvent() {
        }
        return APIDetachPrimaryStorageFromClusterEvent;
    }());
    ApiHeader.APIDetachPrimaryStorageFromClusterEvent = APIDetachPrimaryStorageFromClusterEvent;
    var APIChangePrimaryStorageStateEvent = (function () {
        function APIChangePrimaryStorageStateEvent() {
        }
        return APIChangePrimaryStorageStateEvent;
    }());
    ApiHeader.APIChangePrimaryStorageStateEvent = APIChangePrimaryStorageStateEvent;
    var APIUpdatePrimaryStorageEvent = (function () {
        function APIUpdatePrimaryStorageEvent() {
        }
        return APIUpdatePrimaryStorageEvent;
    }());
    ApiHeader.APIUpdatePrimaryStorageEvent = APIUpdatePrimaryStorageEvent;
    var APIReconnectPrimaryStorageEvent = (function () {
        function APIReconnectPrimaryStorageEvent() {
        }
        return APIReconnectPrimaryStorageEvent;
    }());
    ApiHeader.APIReconnectPrimaryStorageEvent = APIReconnectPrimaryStorageEvent;
    var APIAttachPrimaryStorageToClusterEvent = (function () {
        function APIAttachPrimaryStorageToClusterEvent() {
        }
        return APIAttachPrimaryStorageToClusterEvent;
    }());
    ApiHeader.APIAttachPrimaryStorageToClusterEvent = APIAttachPrimaryStorageToClusterEvent;
    var APIAddPrimaryStorageEvent = (function () {
        function APIAddPrimaryStorageEvent() {
        }
        return APIAddPrimaryStorageEvent;
    }());
    ApiHeader.APIAddPrimaryStorageEvent = APIAddPrimaryStorageEvent;
    var APIDeleteVolumeSnapshotEvent = (function () {
        function APIDeleteVolumeSnapshotEvent() {
        }
        return APIDeleteVolumeSnapshotEvent;
    }());
    ApiHeader.APIDeleteVolumeSnapshotEvent = APIDeleteVolumeSnapshotEvent;
    var APIUpdateVolumeSnapshotEvent = (function () {
        function APIUpdateVolumeSnapshotEvent() {
        }
        return APIUpdateVolumeSnapshotEvent;
    }());
    ApiHeader.APIUpdateVolumeSnapshotEvent = APIUpdateVolumeSnapshotEvent;
    var APIRevertVolumeFromSnapshotEvent = (function () {
        function APIRevertVolumeFromSnapshotEvent() {
        }
        return APIRevertVolumeFromSnapshotEvent;
    }());
    ApiHeader.APIRevertVolumeFromSnapshotEvent = APIRevertVolumeFromSnapshotEvent;
    var APIDeleteVolumeSnapshotFromBackupStorageEvent = (function () {
        function APIDeleteVolumeSnapshotFromBackupStorageEvent() {
        }
        return APIDeleteVolumeSnapshotFromBackupStorageEvent;
    }());
    ApiHeader.APIDeleteVolumeSnapshotFromBackupStorageEvent = APIDeleteVolumeSnapshotFromBackupStorageEvent;
    var APIBackupVolumeSnapshotEvent = (function () {
        function APIBackupVolumeSnapshotEvent() {
        }
        return APIBackupVolumeSnapshotEvent;
    }());
    ApiHeader.APIBackupVolumeSnapshotEvent = APIBackupVolumeSnapshotEvent;
    var BackupStorageInventory = (function () {
        function BackupStorageInventory() {
        }
        return BackupStorageInventory;
    }());
    ApiHeader.BackupStorageInventory = BackupStorageInventory;
    var APIUpdateBackupStorageEvent = (function () {
        function APIUpdateBackupStorageEvent() {
        }
        return APIUpdateBackupStorageEvent;
    }());
    ApiHeader.APIUpdateBackupStorageEvent = APIUpdateBackupStorageEvent;
    var APIDetachBackupStorageFromZoneEvent = (function () {
        function APIDetachBackupStorageFromZoneEvent() {
        }
        return APIDetachBackupStorageFromZoneEvent;
    }());
    ApiHeader.APIDetachBackupStorageFromZoneEvent = APIDetachBackupStorageFromZoneEvent;
    var APIScanBackupStorageEvent = (function () {
        function APIScanBackupStorageEvent() {
        }
        return APIScanBackupStorageEvent;
    }());
    ApiHeader.APIScanBackupStorageEvent = APIScanBackupStorageEvent;
    var APIAddBackupStorageEvent = (function () {
        function APIAddBackupStorageEvent() {
        }
        return APIAddBackupStorageEvent;
    }());
    ApiHeader.APIAddBackupStorageEvent = APIAddBackupStorageEvent;
    var APIAttachBackupStorageToZoneEvent = (function () {
        function APIAttachBackupStorageToZoneEvent() {
        }
        return APIAttachBackupStorageToZoneEvent;
    }());
    ApiHeader.APIAttachBackupStorageToZoneEvent = APIAttachBackupStorageToZoneEvent;
    var APIChangeBackupStorageStateEvent = (function () {
        function APIChangeBackupStorageStateEvent() {
        }
        return APIChangeBackupStorageStateEvent;
    }());
    ApiHeader.APIChangeBackupStorageStateEvent = APIChangeBackupStorageStateEvent;
    var APIDeleteBackupStorageEvent = (function () {
        function APIDeleteBackupStorageEvent() {
        }
        return APIDeleteBackupStorageEvent;
    }());
    ApiHeader.APIDeleteBackupStorageEvent = APIDeleteBackupStorageEvent;
    var IpRangeInventory = (function () {
        function IpRangeInventory() {
        }
        return IpRangeInventory;
    }());
    ApiHeader.IpRangeInventory = IpRangeInventory;
    var APIAddIpRangeEvent = (function () {
        function APIAddIpRangeEvent() {
        }
        return APIAddIpRangeEvent;
    }());
    ApiHeader.APIAddIpRangeEvent = APIAddIpRangeEvent;
    var NetworkServiceL3NetworkRefInventory = (function () {
        function NetworkServiceL3NetworkRefInventory() {
        }
        return NetworkServiceL3NetworkRefInventory;
    }());
    ApiHeader.NetworkServiceL3NetworkRefInventory = NetworkServiceL3NetworkRefInventory;
    var L3NetworkInventory = (function () {
        function L3NetworkInventory() {
        }
        return L3NetworkInventory;
    }());
    ApiHeader.L3NetworkInventory = L3NetworkInventory;
    var APIRemoveDnsFromL3NetworkEvent = (function () {
        function APIRemoveDnsFromL3NetworkEvent() {
        }
        return APIRemoveDnsFromL3NetworkEvent;
    }());
    ApiHeader.APIRemoveDnsFromL3NetworkEvent = APIRemoveDnsFromL3NetworkEvent;
    var APIDeleteL3NetworkEvent = (function () {
        function APIDeleteL3NetworkEvent() {
        }
        return APIDeleteL3NetworkEvent;
    }());
    ApiHeader.APIDeleteL3NetworkEvent = APIDeleteL3NetworkEvent;
    var APIChangeL3NetworkStateEvent = (function () {
        function APIChangeL3NetworkStateEvent() {
        }
        return APIChangeL3NetworkStateEvent;
    }());
    ApiHeader.APIChangeL3NetworkStateEvent = APIChangeL3NetworkStateEvent;
    var APIDeleteIpRangeEvent = (function () {
        function APIDeleteIpRangeEvent() {
        }
        return APIDeleteIpRangeEvent;
    }());
    ApiHeader.APIDeleteIpRangeEvent = APIDeleteIpRangeEvent;
    var APIAddIpRangeByNetworkCidrEvent = (function () {
        function APIAddIpRangeByNetworkCidrEvent() {
        }
        return APIAddIpRangeByNetworkCidrEvent;
    }());
    ApiHeader.APIAddIpRangeByNetworkCidrEvent = APIAddIpRangeByNetworkCidrEvent;
    var APIUpdateIpRangeEvent = (function () {
        function APIUpdateIpRangeEvent() {
        }
        return APIUpdateIpRangeEvent;
    }());
    ApiHeader.APIUpdateIpRangeEvent = APIUpdateIpRangeEvent;
    var APIUpdateL3NetworkEvent = (function () {
        function APIUpdateL3NetworkEvent() {
        }
        return APIUpdateL3NetworkEvent;
    }());
    ApiHeader.APIUpdateL3NetworkEvent = APIUpdateL3NetworkEvent;
    var APIAddDnsToL3NetworkEvent = (function () {
        function APIAddDnsToL3NetworkEvent() {
        }
        return APIAddDnsToL3NetworkEvent;
    }());
    ApiHeader.APIAddDnsToL3NetworkEvent = APIAddDnsToL3NetworkEvent;
    var APICreateL3NetworkEvent = (function () {
        function APICreateL3NetworkEvent() {
        }
        return APICreateL3NetworkEvent;
    }());
    ApiHeader.APICreateL3NetworkEvent = APICreateL3NetworkEvent;
    var NetworkServiceProviderInventory = (function () {
        function NetworkServiceProviderInventory() {
        }
        return NetworkServiceProviderInventory;
    }());
    ApiHeader.NetworkServiceProviderInventory = NetworkServiceProviderInventory;
    var APIDetachNetworkServiceProviderFromL2NetworkEvent = (function () {
        function APIDetachNetworkServiceProviderFromL2NetworkEvent() {
        }
        return APIDetachNetworkServiceProviderFromL2NetworkEvent;
    }());
    ApiHeader.APIDetachNetworkServiceProviderFromL2NetworkEvent = APIDetachNetworkServiceProviderFromL2NetworkEvent;
    var APIAddNetworkServiceProviderEvent = (function () {
        function APIAddNetworkServiceProviderEvent() {
        }
        return APIAddNetworkServiceProviderEvent;
    }());
    ApiHeader.APIAddNetworkServiceProviderEvent = APIAddNetworkServiceProviderEvent;
    var APIAttachNetworkServiceProviderToL2NetworkEvent = (function () {
        function APIAttachNetworkServiceProviderToL2NetworkEvent() {
        }
        return APIAttachNetworkServiceProviderToL2NetworkEvent;
    }());
    ApiHeader.APIAttachNetworkServiceProviderToL2NetworkEvent = APIAttachNetworkServiceProviderToL2NetworkEvent;
    var APIAttachNetworkServiceToL3NetworkEvent = (function () {
        function APIAttachNetworkServiceToL3NetworkEvent() {
        }
        return APIAttachNetworkServiceToL3NetworkEvent;
    }());
    ApiHeader.APIAttachNetworkServiceToL3NetworkEvent = APIAttachNetworkServiceToL3NetworkEvent;
    var L2NetworkInventory = (function () {
        function L2NetworkInventory() {
        }
        return L2NetworkInventory;
    }());
    ApiHeader.L2NetworkInventory = L2NetworkInventory;
    var APIAttachL2NetworkToClusterEvent = (function () {
        function APIAttachL2NetworkToClusterEvent() {
        }
        return APIAttachL2NetworkToClusterEvent;
    }());
    ApiHeader.APIAttachL2NetworkToClusterEvent = APIAttachL2NetworkToClusterEvent;
    var L2VlanNetworkInventory = (function () {
        function L2VlanNetworkInventory() {
        }
        return L2VlanNetworkInventory;
    }());
    ApiHeader.L2VlanNetworkInventory = L2VlanNetworkInventory;
    var APICreateL2VlanNetworkEvent = (function () {
        function APICreateL2VlanNetworkEvent() {
        }
        return APICreateL2VlanNetworkEvent;
    }());
    ApiHeader.APICreateL2VlanNetworkEvent = APICreateL2VlanNetworkEvent;
    var APIDetachL2NetworkFromClusterEvent = (function () {
        function APIDetachL2NetworkFromClusterEvent() {
        }
        return APIDetachL2NetworkFromClusterEvent;
    }());
    ApiHeader.APIDetachL2NetworkFromClusterEvent = APIDetachL2NetworkFromClusterEvent;
    var APIDeleteL2NetworkEvent = (function () {
        function APIDeleteL2NetworkEvent() {
        }
        return APIDeleteL2NetworkEvent;
    }());
    ApiHeader.APIDeleteL2NetworkEvent = APIDeleteL2NetworkEvent;
    var APICreateL2NetworkEvent = (function () {
        function APICreateL2NetworkEvent() {
        }
        return APICreateL2NetworkEvent;
    }());
    ApiHeader.APICreateL2NetworkEvent = APICreateL2NetworkEvent;
    var APIUpdateL2NetworkEvent = (function () {
        function APIUpdateL2NetworkEvent() {
        }
        return APIUpdateL2NetworkEvent;
    }());
    ApiHeader.APIUpdateL2NetworkEvent = APIUpdateL2NetworkEvent;
    var APIDeleteSearchIndexEvent = (function () {
        function APIDeleteSearchIndexEvent() {
        }
        return APIDeleteSearchIndexEvent;
    }());
    ApiHeader.APIDeleteSearchIndexEvent = APIDeleteSearchIndexEvent;
    var APISearchGenerateSqlTriggerEvent = (function () {
        function APISearchGenerateSqlTriggerEvent() {
        }
        return APISearchGenerateSqlTriggerEvent;
    }());
    ApiHeader.APISearchGenerateSqlTriggerEvent = APISearchGenerateSqlTriggerEvent;
    var APICreateSearchIndexEvent = (function () {
        function APICreateSearchIndexEvent() {
        }
        return APICreateSearchIndexEvent;
    }());
    ApiHeader.APICreateSearchIndexEvent = APICreateSearchIndexEvent;
    var UserTagInventory = (function () {
        function UserTagInventory() {
        }
        return UserTagInventory;
    }());
    ApiHeader.UserTagInventory = UserTagInventory;
    var APICreateUserTagEvent = (function () {
        function APICreateUserTagEvent() {
        }
        return APICreateUserTagEvent;
    }());
    ApiHeader.APICreateUserTagEvent = APICreateUserTagEvent;
    var APIDeleteTagEvent = (function () {
        function APIDeleteTagEvent() {
        }
        return APIDeleteTagEvent;
    }());
    ApiHeader.APIDeleteTagEvent = APIDeleteTagEvent;
    var TagInventory = (function () {
        function TagInventory() {
        }
        return TagInventory;
    }());
    ApiHeader.TagInventory = TagInventory;
    var APICreateTagEvent = (function () {
        function APICreateTagEvent() {
        }
        return APICreateTagEvent;
    }());
    ApiHeader.APICreateTagEvent = APICreateTagEvent;
    var SystemTagInventory = (function () {
        function SystemTagInventory() {
        }
        return SystemTagInventory;
    }());
    ApiHeader.SystemTagInventory = SystemTagInventory;
    var APICreateSystemTagEvent = (function () {
        function APICreateSystemTagEvent() {
        }
        return APICreateSystemTagEvent;
    }());
    ApiHeader.APICreateSystemTagEvent = APICreateSystemTagEvent;
    var APIUpdateSystemTagEvent = (function () {
        function APIUpdateSystemTagEvent() {
        }
        return APIUpdateSystemTagEvent;
    }());
    ApiHeader.APIUpdateSystemTagEvent = APIUpdateSystemTagEvent;
    var APIEvent = (function () {
        function APIEvent() {
        }
        return APIEvent;
    }());
    ApiHeader.APIEvent = APIEvent;
    var APIDeleteClusterEvent = (function () {
        function APIDeleteClusterEvent() {
        }
        return APIDeleteClusterEvent;
    }());
    ApiHeader.APIDeleteClusterEvent = APIDeleteClusterEvent;
    var ClusterInventory = (function () {
        function ClusterInventory() {
        }
        return ClusterInventory;
    }());
    ApiHeader.ClusterInventory = ClusterInventory;
    var APICreateClusterEvent = (function () {
        function APICreateClusterEvent() {
        }
        return APICreateClusterEvent;
    }());
    ApiHeader.APICreateClusterEvent = APICreateClusterEvent;
    var APIChangeClusterStateEvent = (function () {
        function APIChangeClusterStateEvent() {
        }
        return APIChangeClusterStateEvent;
    }());
    ApiHeader.APIChangeClusterStateEvent = APIChangeClusterStateEvent;
    var APIUpdateClusterEvent = (function () {
        function APIUpdateClusterEvent() {
        }
        return APIUpdateClusterEvent;
    }());
    ApiHeader.APIUpdateClusterEvent = APIUpdateClusterEvent;
    var APIRemoveUserFromGroupEvent = (function () {
        function APIRemoveUserFromGroupEvent() {
        }
        return APIRemoveUserFromGroupEvent;
    }());
    ApiHeader.APIRemoveUserFromGroupEvent = APIRemoveUserFromGroupEvent;
    var AccountInventory = (function () {
        function AccountInventory() {
        }
        return AccountInventory;
    }());
    ApiHeader.AccountInventory = AccountInventory;
    var APICreateAccountEvent = (function () {
        function APICreateAccountEvent() {
        }
        return APICreateAccountEvent;
    }());
    ApiHeader.APICreateAccountEvent = APICreateAccountEvent;
    var APIDeleteUserGroupEvent = (function () {
        function APIDeleteUserGroupEvent() {
        }
        return APIDeleteUserGroupEvent;
    }());
    ApiHeader.APIDeleteUserGroupEvent = APIDeleteUserGroupEvent;
    var APIAttachPolicyToUserEvent = (function () {
        function APIAttachPolicyToUserEvent() {
        }
        return APIAttachPolicyToUserEvent;
    }());
    ApiHeader.APIAttachPolicyToUserEvent = APIAttachPolicyToUserEvent;
    var APIShareResourceEvent = (function () {
        function APIShareResourceEvent() {
        }
        return APIShareResourceEvent;
    }());
    ApiHeader.APIShareResourceEvent = APIShareResourceEvent;
    var APIDetachPolicyFromUserGroupEvent = (function () {
        function APIDetachPolicyFromUserGroupEvent() {
        }
        return APIDetachPolicyFromUserGroupEvent;
    }());
    ApiHeader.APIDetachPolicyFromUserGroupEvent = APIDetachPolicyFromUserGroupEvent;
    var APIDeletePolicyEvent = (function () {
        function APIDeletePolicyEvent() {
        }
        return APIDeletePolicyEvent;
    }());
    ApiHeader.APIDeletePolicyEvent = APIDeletePolicyEvent;
    var APIAddUserToGroupEvent = (function () {
        function APIAddUserToGroupEvent() {
        }
        return APIAddUserToGroupEvent;
    }());
    ApiHeader.APIAddUserToGroupEvent = APIAddUserToGroupEvent;
    var APIUpdateUserEvent = (function () {
        function APIUpdateUserEvent() {
        }
        return APIUpdateUserEvent;
    }());
    ApiHeader.APIUpdateUserEvent = APIUpdateUserEvent;
    var APIDeleteAccountEvent = (function () {
        function APIDeleteAccountEvent() {
        }
        return APIDeleteAccountEvent;
    }());
    ApiHeader.APIDeleteAccountEvent = APIDeleteAccountEvent;
    var APIUpdateAccountEvent = (function () {
        function APIUpdateAccountEvent() {
        }
        return APIUpdateAccountEvent;
    }());
    ApiHeader.APIUpdateAccountEvent = APIUpdateAccountEvent;
    var QuotaInventory = (function () {
        function QuotaInventory() {
        }
        return QuotaInventory;
    }());
    ApiHeader.QuotaInventory = QuotaInventory;
    var APIUpdateQuotaEvent = (function () {
        function APIUpdateQuotaEvent() {
        }
        return APIUpdateQuotaEvent;
    }());
    ApiHeader.APIUpdateQuotaEvent = APIUpdateQuotaEvent;
    var PolicyInventory = (function () {
        function PolicyInventory() {
        }
        return PolicyInventory;
    }());
    ApiHeader.PolicyInventory = PolicyInventory;
    var APICreatePolicyEvent = (function () {
        function APICreatePolicyEvent() {
        }
        return APICreatePolicyEvent;
    }());
    ApiHeader.APICreatePolicyEvent = APICreatePolicyEvent;
    var UserInventory = (function () {
        function UserInventory() {
        }
        return UserInventory;
    }());
    ApiHeader.UserInventory = UserInventory;
    var APICreateUserEvent = (function () {
        function APICreateUserEvent() {
        }
        return APICreateUserEvent;
    }());
    ApiHeader.APICreateUserEvent = APICreateUserEvent;
    var APIDetachPolicyFromUserEvent = (function () {
        function APIDetachPolicyFromUserEvent() {
        }
        return APIDetachPolicyFromUserEvent;
    }());
    ApiHeader.APIDetachPolicyFromUserEvent = APIDetachPolicyFromUserEvent;
    var APIDeleteUserEvent = (function () {
        function APIDeleteUserEvent() {
        }
        return APIDeleteUserEvent;
    }());
    ApiHeader.APIDeleteUserEvent = APIDeleteUserEvent;
    var UserGroupInventory = (function () {
        function UserGroupInventory() {
        }
        return UserGroupInventory;
    }());
    ApiHeader.UserGroupInventory = UserGroupInventory;
    var APICreateUserGroupEvent = (function () {
        function APICreateUserGroupEvent() {
        }
        return APICreateUserGroupEvent;
    }());
    ApiHeader.APICreateUserGroupEvent = APICreateUserGroupEvent;
    var APIAttachPolicyToUserGroupEvent = (function () {
        function APIAttachPolicyToUserGroupEvent() {
        }
        return APIAttachPolicyToUserGroupEvent;
    }());
    ApiHeader.APIAttachPolicyToUserGroupEvent = APIAttachPolicyToUserGroupEvent;
    var APIRevokeResourceSharingEvent = (function () {
        function APIRevokeResourceSharingEvent() {
        }
        return APIRevokeResourceSharingEvent;
    }());
    ApiHeader.APIRevokeResourceSharingEvent = APIRevokeResourceSharingEvent;
    var ZoneInventory = (function () {
        function ZoneInventory() {
        }
        return ZoneInventory;
    }());
    ApiHeader.ZoneInventory = ZoneInventory;
    var APIUpdateZoneEvent = (function () {
        function APIUpdateZoneEvent() {
        }
        return APIUpdateZoneEvent;
    }());
    ApiHeader.APIUpdateZoneEvent = APIUpdateZoneEvent;
    var APIChangeZoneStateEvent = (function () {
        function APIChangeZoneStateEvent() {
        }
        return APIChangeZoneStateEvent;
    }());
    ApiHeader.APIChangeZoneStateEvent = APIChangeZoneStateEvent;
    var APICreateZoneEvent = (function () {
        function APICreateZoneEvent() {
        }
        return APICreateZoneEvent;
    }());
    ApiHeader.APICreateZoneEvent = APICreateZoneEvent;
    var APIDeleteZoneEvent = (function () {
        function APIDeleteZoneEvent() {
        }
        return APIDeleteZoneEvent;
    }());
    ApiHeader.APIDeleteZoneEvent = APIDeleteZoneEvent;
    var HostInventory = (function () {
        function HostInventory() {
        }
        return HostInventory;
    }());
    ApiHeader.HostInventory = HostInventory;
    var APIAddHostEvent = (function () {
        function APIAddHostEvent() {
        }
        return APIAddHostEvent;
    }());
    ApiHeader.APIAddHostEvent = APIAddHostEvent;
    var APIChangeHostStateEvent = (function () {
        function APIChangeHostStateEvent() {
        }
        return APIChangeHostStateEvent;
    }());
    ApiHeader.APIChangeHostStateEvent = APIChangeHostStateEvent;
    var APIDeleteHostEvent = (function () {
        function APIDeleteHostEvent() {
        }
        return APIDeleteHostEvent;
    }());
    ApiHeader.APIDeleteHostEvent = APIDeleteHostEvent;
    var APIReconnectHostEvent = (function () {
        function APIReconnectHostEvent() {
        }
        return APIReconnectHostEvent;
    }());
    ApiHeader.APIReconnectHostEvent = APIReconnectHostEvent;
    var APIUpdateHostEvent = (function () {
        function APIUpdateHostEvent() {
        }
        return APIUpdateHostEvent;
    }());
    ApiHeader.APIUpdateHostEvent = APIUpdateHostEvent;
    var CephPrimaryStorageMonInventory = (function () {
        function CephPrimaryStorageMonInventory() {
        }
        return CephPrimaryStorageMonInventory;
    }());
    ApiHeader.CephPrimaryStorageMonInventory = CephPrimaryStorageMonInventory;
    var CephPrimaryStorageInventory = (function () {
        function CephPrimaryStorageInventory() {
        }
        return CephPrimaryStorageInventory;
    }());
    ApiHeader.CephPrimaryStorageInventory = CephPrimaryStorageInventory;
    var APIRemoveMonFromCephPrimaryStorageEvent = (function () {
        function APIRemoveMonFromCephPrimaryStorageEvent() {
        }
        return APIRemoveMonFromCephPrimaryStorageEvent;
    }());
    ApiHeader.APIRemoveMonFromCephPrimaryStorageEvent = APIRemoveMonFromCephPrimaryStorageEvent;
    var APIAddMonToCephPrimaryStorageEvent = (function () {
        function APIAddMonToCephPrimaryStorageEvent() {
        }
        return APIAddMonToCephPrimaryStorageEvent;
    }());
    ApiHeader.APIAddMonToCephPrimaryStorageEvent = APIAddMonToCephPrimaryStorageEvent;
    var CephBackupStorageMonInventory = (function () {
        function CephBackupStorageMonInventory() {
        }
        return CephBackupStorageMonInventory;
    }());
    ApiHeader.CephBackupStorageMonInventory = CephBackupStorageMonInventory;
    var CephBackupStorageInventory = (function () {
        function CephBackupStorageInventory() {
        }
        return CephBackupStorageInventory;
    }());
    ApiHeader.CephBackupStorageInventory = CephBackupStorageInventory;
    var APIRemoveMonFromCephBackupStorageEvent = (function () {
        function APIRemoveMonFromCephBackupStorageEvent() {
        }
        return APIRemoveMonFromCephBackupStorageEvent;
    }());
    ApiHeader.APIRemoveMonFromCephBackupStorageEvent = APIRemoveMonFromCephBackupStorageEvent;
    var APIAddMonToCephBackupStorageEvent = (function () {
        function APIAddMonToCephBackupStorageEvent() {
        }
        return APIAddMonToCephBackupStorageEvent;
    }());
    ApiHeader.APIAddMonToCephBackupStorageEvent = APIAddMonToCephBackupStorageEvent;
    var FusionstorPrimaryStorageMonInventory = (function () {
        function FusionstorPrimaryStorageMonInventory() {
        }
        return FusionstorPrimaryStorageMonInventory;
    }());
    ApiHeader.FusionstorPrimaryStorageMonInventory = FusionstorPrimaryStorageMonInventory;
    var FusionstorPrimaryStorageInventory = (function () {
        function FusionstorPrimaryStorageInventory() {
        }
        return FusionstorPrimaryStorageInventory;
    }());
    ApiHeader.FusionstorPrimaryStorageInventory = FusionstorPrimaryStorageInventory;
    var APIRemoveMonFromFusionstorPrimaryStorageEvent = (function () {
        function APIRemoveMonFromFusionstorPrimaryStorageEvent() {
        }
        return APIRemoveMonFromFusionstorPrimaryStorageEvent;
    }());
    ApiHeader.APIRemoveMonFromFusionstorPrimaryStorageEvent = APIRemoveMonFromFusionstorPrimaryStorageEvent;
    var APIAddMonToFusionstorPrimaryStorageEvent = (function () {
        function APIAddMonToFusionstorPrimaryStorageEvent() {
        }
        return APIAddMonToFusionstorPrimaryStorageEvent;
    }());
    ApiHeader.APIAddMonToFusionstorPrimaryStorageEvent = APIAddMonToFusionstorPrimaryStorageEvent;
    var FusionstorBackupStorageMonInventory = (function () {
        function FusionstorBackupStorageMonInventory() {
        }
        return FusionstorBackupStorageMonInventory;
    }());
    ApiHeader.FusionstorBackupStorageMonInventory = FusionstorBackupStorageMonInventory;
    var FusionstorBackupStorageInventory = (function () {
        function FusionstorBackupStorageInventory() {
        }
        return FusionstorBackupStorageInventory;
    }());
    ApiHeader.FusionstorBackupStorageInventory = FusionstorBackupStorageInventory;
    var APIRemoveMonFromFusionstorBackupStorageEvent = (function () {
        function APIRemoveMonFromFusionstorBackupStorageEvent() {
        }
        return APIRemoveMonFromFusionstorBackupStorageEvent;
    }());
    ApiHeader.APIRemoveMonFromFusionstorBackupStorageEvent = APIRemoveMonFromFusionstorBackupStorageEvent;
    var APIAddMonToFusionstorBackupStorageEvent = (function () {
        function APIAddMonToFusionstorBackupStorageEvent() {
        }
        return APIAddMonToFusionstorBackupStorageEvent;
    }());
    ApiHeader.APIAddMonToFusionstorBackupStorageEvent = APIAddMonToFusionstorBackupStorageEvent;
    var SftpBackupStorageInventory = (function () {
        function SftpBackupStorageInventory() {
        }
        return SftpBackupStorageInventory;
    }());
    ApiHeader.SftpBackupStorageInventory = SftpBackupStorageInventory;
    var APIAddSftpBackupStorageEvent = (function () {
        function APIAddSftpBackupStorageEvent() {
        }
        return APIAddSftpBackupStorageEvent;
    }());
    ApiHeader.APIAddSftpBackupStorageEvent = APIAddSftpBackupStorageEvent;
    var APIReconnectSftpBackupStorageEvent = (function () {
        function APIReconnectSftpBackupStorageEvent() {
        }
        return APIReconnectSftpBackupStorageEvent;
    }());
    ApiHeader.APIReconnectSftpBackupStorageEvent = APIReconnectSftpBackupStorageEvent;
    var ApplianceVmInventory = (function () {
        function ApplianceVmInventory() {
        }
        return ApplianceVmInventory;
    }());
    ApiHeader.ApplianceVmInventory = ApplianceVmInventory;
    var APIReconnectVirtualRouterEvent = (function () {
        function APIReconnectVirtualRouterEvent() {
        }
        return APIReconnectVirtualRouterEvent;
    }());
    ApiHeader.APIReconnectVirtualRouterEvent = APIReconnectVirtualRouterEvent;
    var APIDeletePortForwardingRuleEvent = (function () {
        function APIDeletePortForwardingRuleEvent() {
        }
        return APIDeletePortForwardingRuleEvent;
    }());
    ApiHeader.APIDeletePortForwardingRuleEvent = APIDeletePortForwardingRuleEvent;
    var PortForwardingRuleInventory = (function () {
        function PortForwardingRuleInventory() {
        }
        return PortForwardingRuleInventory;
    }());
    ApiHeader.PortForwardingRuleInventory = PortForwardingRuleInventory;
    var APIChangePortForwardingRuleStateEvent = (function () {
        function APIChangePortForwardingRuleStateEvent() {
        }
        return APIChangePortForwardingRuleStateEvent;
    }());
    ApiHeader.APIChangePortForwardingRuleStateEvent = APIChangePortForwardingRuleStateEvent;
    var APIDetachPortForwardingRuleEvent = (function () {
        function APIDetachPortForwardingRuleEvent() {
        }
        return APIDetachPortForwardingRuleEvent;
    }());
    ApiHeader.APIDetachPortForwardingRuleEvent = APIDetachPortForwardingRuleEvent;
    var APIAttachPortForwardingRuleEvent = (function () {
        function APIAttachPortForwardingRuleEvent() {
        }
        return APIAttachPortForwardingRuleEvent;
    }());
    ApiHeader.APIAttachPortForwardingRuleEvent = APIAttachPortForwardingRuleEvent;
    var APICreatePortForwardingRuleEvent = (function () {
        function APICreatePortForwardingRuleEvent() {
        }
        return APICreatePortForwardingRuleEvent;
    }());
    ApiHeader.APICreatePortForwardingRuleEvent = APICreatePortForwardingRuleEvent;
    var APIUpdatePortForwardingRuleEvent = (function () {
        function APIUpdatePortForwardingRuleEvent() {
        }
        return APIUpdatePortForwardingRuleEvent;
    }());
    ApiHeader.APIUpdatePortForwardingRuleEvent = APIUpdatePortForwardingRuleEvent;
    var EipInventory = (function () {
        function EipInventory() {
        }
        return EipInventory;
    }());
    ApiHeader.EipInventory = EipInventory;
    var APIChangeEipStateEvent = (function () {
        function APIChangeEipStateEvent() {
        }
        return APIChangeEipStateEvent;
    }());
    ApiHeader.APIChangeEipStateEvent = APIChangeEipStateEvent;
    var APIUpdateEipEvent = (function () {
        function APIUpdateEipEvent() {
        }
        return APIUpdateEipEvent;
    }());
    ApiHeader.APIUpdateEipEvent = APIUpdateEipEvent;
    var APICreateEipEvent = (function () {
        function APICreateEipEvent() {
        }
        return APICreateEipEvent;
    }());
    ApiHeader.APICreateEipEvent = APICreateEipEvent;
    var APIDetachEipEvent = (function () {
        function APIDetachEipEvent() {
        }
        return APIDetachEipEvent;
    }());
    ApiHeader.APIDetachEipEvent = APIDetachEipEvent;
    var APIAttachEipEvent = (function () {
        function APIAttachEipEvent() {
        }
        return APIAttachEipEvent;
    }());
    ApiHeader.APIAttachEipEvent = APIAttachEipEvent;
    var APIDeleteEipEvent = (function () {
        function APIDeleteEipEvent() {
        }
        return APIDeleteEipEvent;
    }());
    ApiHeader.APIDeleteEipEvent = APIDeleteEipEvent;
    var LoadBalancerListenerVmNicRefInventory = (function () {
        function LoadBalancerListenerVmNicRefInventory() {
        }
        return LoadBalancerListenerVmNicRefInventory;
    }());
    ApiHeader.LoadBalancerListenerVmNicRefInventory = LoadBalancerListenerVmNicRefInventory;
    var LoadBalancerListenerInventory = (function () {
        function LoadBalancerListenerInventory() {
        }
        return LoadBalancerListenerInventory;
    }());
    ApiHeader.LoadBalancerListenerInventory = LoadBalancerListenerInventory;
    var LoadBalancerInventory = (function () {
        function LoadBalancerInventory() {
        }
        return LoadBalancerInventory;
    }());
    ApiHeader.LoadBalancerInventory = LoadBalancerInventory;
    var APIRefreshLoadBalancerEvent = (function () {
        function APIRefreshLoadBalancerEvent() {
        }
        return APIRefreshLoadBalancerEvent;
    }());
    ApiHeader.APIRefreshLoadBalancerEvent = APIRefreshLoadBalancerEvent;
    var APICreateLoadBalancerEvent = (function () {
        function APICreateLoadBalancerEvent() {
        }
        return APICreateLoadBalancerEvent;
    }());
    ApiHeader.APICreateLoadBalancerEvent = APICreateLoadBalancerEvent;
    var APIRemoveVmNicFromLoadBalancerEvent = (function () {
        function APIRemoveVmNicFromLoadBalancerEvent() {
        }
        return APIRemoveVmNicFromLoadBalancerEvent;
    }());
    ApiHeader.APIRemoveVmNicFromLoadBalancerEvent = APIRemoveVmNicFromLoadBalancerEvent;
    var APIAddVmNicToLoadBalancerEvent = (function () {
        function APIAddVmNicToLoadBalancerEvent() {
        }
        return APIAddVmNicToLoadBalancerEvent;
    }());
    ApiHeader.APIAddVmNicToLoadBalancerEvent = APIAddVmNicToLoadBalancerEvent;
    var APIDeleteLoadBalancerListenerEvent = (function () {
        function APIDeleteLoadBalancerListenerEvent() {
        }
        return APIDeleteLoadBalancerListenerEvent;
    }());
    ApiHeader.APIDeleteLoadBalancerListenerEvent = APIDeleteLoadBalancerListenerEvent;
    var APICreateLoadBalancerListenerEvent = (function () {
        function APICreateLoadBalancerListenerEvent() {
        }
        return APICreateLoadBalancerListenerEvent;
    }());
    ApiHeader.APICreateLoadBalancerListenerEvent = APICreateLoadBalancerListenerEvent;
    var APIDeleteLoadBalancerEvent = (function () {
        function APIDeleteLoadBalancerEvent() {
        }
        return APIDeleteLoadBalancerEvent;
    }());
    ApiHeader.APIDeleteLoadBalancerEvent = APIDeleteLoadBalancerEvent;
    var SecurityGroupRuleInventory = (function () {
        function SecurityGroupRuleInventory() {
        }
        return SecurityGroupRuleInventory;
    }());
    ApiHeader.SecurityGroupRuleInventory = SecurityGroupRuleInventory;
    var SecurityGroupInventory = (function () {
        function SecurityGroupInventory() {
        }
        return SecurityGroupInventory;
    }());
    ApiHeader.SecurityGroupInventory = SecurityGroupInventory;
    var APIAttachSecurityGroupToL3NetworkEvent = (function () {
        function APIAttachSecurityGroupToL3NetworkEvent() {
        }
        return APIAttachSecurityGroupToL3NetworkEvent;
    }());
    ApiHeader.APIAttachSecurityGroupToL3NetworkEvent = APIAttachSecurityGroupToL3NetworkEvent;
    var APIDeleteSecurityGroupRuleEvent = (function () {
        function APIDeleteSecurityGroupRuleEvent() {
        }
        return APIDeleteSecurityGroupRuleEvent;
    }());
    ApiHeader.APIDeleteSecurityGroupRuleEvent = APIDeleteSecurityGroupRuleEvent;
    var APIAddVmNicToSecurityGroupEvent = (function () {
        function APIAddVmNicToSecurityGroupEvent() {
        }
        return APIAddVmNicToSecurityGroupEvent;
    }());
    ApiHeader.APIAddVmNicToSecurityGroupEvent = APIAddVmNicToSecurityGroupEvent;
    var APIChangeSecurityGroupStateEvent = (function () {
        function APIChangeSecurityGroupStateEvent() {
        }
        return APIChangeSecurityGroupStateEvent;
    }());
    ApiHeader.APIChangeSecurityGroupStateEvent = APIChangeSecurityGroupStateEvent;
    var APIUpdateSecurityGroupEvent = (function () {
        function APIUpdateSecurityGroupEvent() {
        }
        return APIUpdateSecurityGroupEvent;
    }());
    ApiHeader.APIUpdateSecurityGroupEvent = APIUpdateSecurityGroupEvent;
    var APIDeleteVmNicFromSecurityGroupEvent = (function () {
        function APIDeleteVmNicFromSecurityGroupEvent() {
        }
        return APIDeleteVmNicFromSecurityGroupEvent;
    }());
    ApiHeader.APIDeleteVmNicFromSecurityGroupEvent = APIDeleteVmNicFromSecurityGroupEvent;
    var APIAddSecurityGroupRuleEvent = (function () {
        function APIAddSecurityGroupRuleEvent() {
        }
        return APIAddSecurityGroupRuleEvent;
    }());
    ApiHeader.APIAddSecurityGroupRuleEvent = APIAddSecurityGroupRuleEvent;
    var APICreateSecurityGroupEvent = (function () {
        function APICreateSecurityGroupEvent() {
        }
        return APICreateSecurityGroupEvent;
    }());
    ApiHeader.APICreateSecurityGroupEvent = APICreateSecurityGroupEvent;
    var APIDetachSecurityGroupFromL3NetworkEvent = (function () {
        function APIDetachSecurityGroupFromL3NetworkEvent() {
        }
        return APIDetachSecurityGroupFromL3NetworkEvent;
    }());
    ApiHeader.APIDetachSecurityGroupFromL3NetworkEvent = APIDetachSecurityGroupFromL3NetworkEvent;
    var APIDeleteSecurityGroupEvent = (function () {
        function APIDeleteSecurityGroupEvent() {
        }
        return APIDeleteSecurityGroupEvent;
    }());
    ApiHeader.APIDeleteSecurityGroupEvent = APIDeleteSecurityGroupEvent;
    var VipInventory = (function () {
        function VipInventory() {
        }
        return VipInventory;
    }());
    ApiHeader.VipInventory = VipInventory;
    var APICreateVipEvent = (function () {
        function APICreateVipEvent() {
        }
        return APICreateVipEvent;
    }());
    ApiHeader.APICreateVipEvent = APICreateVipEvent;
    var APIUpdateVipEvent = (function () {
        function APIUpdateVipEvent() {
        }
        return APIUpdateVipEvent;
    }());
    ApiHeader.APIUpdateVipEvent = APIUpdateVipEvent;
    var APIDeleteVipEvent = (function () {
        function APIDeleteVipEvent() {
        }
        return APIDeleteVipEvent;
    }());
    ApiHeader.APIDeleteVipEvent = APIDeleteVipEvent;
    var APIChangeVipStateEvent = (function () {
        function APIChangeVipStateEvent() {
        }
        return APIChangeVipStateEvent;
    }());
    ApiHeader.APIChangeVipStateEvent = APIChangeVipStateEvent;
    var APIGetGlobalConfigReply = (function () {
        function APIGetGlobalConfigReply() {
        }
        return APIGetGlobalConfigReply;
    }());
    ApiHeader.APIGetGlobalConfigReply = APIGetGlobalConfigReply;
    var APIQueryGlobalConfigReply = (function () {
        function APIQueryGlobalConfigReply() {
        }
        return APIQueryGlobalConfigReply;
    }());
    ApiHeader.APIQueryGlobalConfigReply = APIQueryGlobalConfigReply;
    var APIListGlobalConfigReply = (function () {
        function APIListGlobalConfigReply() {
        }
        return APIListGlobalConfigReply;
    }());
    ApiHeader.APIListGlobalConfigReply = APIListGlobalConfigReply;
    var APIQueryReply = (function () {
        function APIQueryReply() {
        }
        return APIQueryReply;
    }());
    ApiHeader.APIQueryReply = APIQueryReply;
    var APIGetCpuMemoryCapacityReply = (function () {
        function APIGetCpuMemoryCapacityReply() {
        }
        return APIGetCpuMemoryCapacityReply;
    }());
    ApiHeader.APIGetCpuMemoryCapacityReply = APIGetCpuMemoryCapacityReply;
    var APIGetHostAllocatorStrategiesReply = (function () {
        function APIGetHostAllocatorStrategiesReply() {
        }
        return APIGetHostAllocatorStrategiesReply;
    }());
    ApiHeader.APIGetHostAllocatorStrategiesReply = APIGetHostAllocatorStrategiesReply;
    var APISearchVmInstanceReply = (function () {
        function APISearchVmInstanceReply() {
        }
        return APISearchVmInstanceReply;
    }());
    ApiHeader.APISearchVmInstanceReply = APISearchVmInstanceReply;
    var APIGetVmInstanceReply = (function () {
        function APIGetVmInstanceReply() {
        }
        return APIGetVmInstanceReply;
    }());
    ApiHeader.APIGetVmInstanceReply = APIGetVmInstanceReply;
    var APIGetVmAttachableDataVolumeReply = (function () {
        function APIGetVmAttachableDataVolumeReply() {
        }
        return APIGetVmAttachableDataVolumeReply;
    }());
    ApiHeader.APIGetVmAttachableDataVolumeReply = APIGetVmAttachableDataVolumeReply;
    var APIGetVmMigrationCandidateHostsReply = (function () {
        function APIGetVmMigrationCandidateHostsReply() {
        }
        return APIGetVmMigrationCandidateHostsReply;
    }());
    ApiHeader.APIGetVmMigrationCandidateHostsReply = APIGetVmMigrationCandidateHostsReply;
    var APIListVmInstanceReply = (function () {
        function APIListVmInstanceReply() {
        }
        return APIListVmInstanceReply;
    }());
    ApiHeader.APIListVmInstanceReply = APIListVmInstanceReply;
    var APIListVmNicReply = (function () {
        function APIListVmNicReply() {
        }
        return APIListVmNicReply;
    }());
    ApiHeader.APIListVmNicReply = APIListVmNicReply;
    var APIQueryVmInstanceReply = (function () {
        function APIQueryVmInstanceReply() {
        }
        return APIQueryVmInstanceReply;
    }());
    ApiHeader.APIQueryVmInstanceReply = APIQueryVmInstanceReply;
    var APIQueryVmNicReply = (function () {
        function APIQueryVmNicReply() {
        }
        return APIQueryVmNicReply;
    }());
    ApiHeader.APIQueryVmNicReply = APIQueryVmNicReply;
    var APIGetVmAttachableL3NetworkReply = (function () {
        function APIGetVmAttachableL3NetworkReply() {
        }
        return APIGetVmAttachableL3NetworkReply;
    }());
    ApiHeader.APIGetVmAttachableL3NetworkReply = APIGetVmAttachableL3NetworkReply;
    var APIGetImageReply = (function () {
        function APIGetImageReply() {
        }
        return APIGetImageReply;
    }());
    ApiHeader.APIGetImageReply = APIGetImageReply;
    var APIQueryImageReply = (function () {
        function APIQueryImageReply() {
        }
        return APIQueryImageReply;
    }());
    ApiHeader.APIQueryImageReply = APIQueryImageReply;
    var APIListImageReply = (function () {
        function APIListImageReply() {
        }
        return APIListImageReply;
    }());
    ApiHeader.APIListImageReply = APIListImageReply;
    var APISearchImageReply = (function () {
        function APISearchImageReply() {
        }
        return APISearchImageReply;
    }());
    ApiHeader.APISearchImageReply = APISearchImageReply;
    var VolumeFormatReplyStruct = (function () {
        function VolumeFormatReplyStruct() {
        }
        return VolumeFormatReplyStruct;
    }());
    ApiHeader.VolumeFormatReplyStruct = VolumeFormatReplyStruct;
    var APIGetVolumeFormatReply = (function () {
        function APIGetVolumeFormatReply() {
        }
        return APIGetVolumeFormatReply;
    }());
    ApiHeader.APIGetVolumeFormatReply = APIGetVolumeFormatReply;
    var APIGetDataVolumeAttachableVmReply = (function () {
        function APIGetDataVolumeAttachableVmReply() {
        }
        return APIGetDataVolumeAttachableVmReply;
    }());
    ApiHeader.APIGetDataVolumeAttachableVmReply = APIGetDataVolumeAttachableVmReply;
    var APIQueryVolumeReply = (function () {
        function APIQueryVolumeReply() {
        }
        return APIQueryVolumeReply;
    }());
    ApiHeader.APIQueryVolumeReply = APIQueryVolumeReply;
    var APIGetVolumeReply = (function () {
        function APIGetVolumeReply() {
        }
        return APIGetVolumeReply;
    }());
    ApiHeader.APIGetVolumeReply = APIGetVolumeReply;
    var APIListVolumeReply = (function () {
        function APIListVolumeReply() {
        }
        return APIListVolumeReply;
    }());
    ApiHeader.APIListVolumeReply = APIListVolumeReply;
    var APISearchVolumeReply = (function () {
        function APISearchVolumeReply() {
        }
        return APISearchVolumeReply;
    }());
    ApiHeader.APISearchVolumeReply = APISearchVolumeReply;
    var APIIsReadyToGoReply = (function () {
        function APIIsReadyToGoReply() {
        }
        return APIIsReadyToGoReply;
    }());
    ApiHeader.APIIsReadyToGoReply = APIIsReadyToGoReply;
    var APISearchInstanceOfferingReply = (function () {
        function APISearchInstanceOfferingReply() {
        }
        return APISearchInstanceOfferingReply;
    }());
    ApiHeader.APISearchInstanceOfferingReply = APISearchInstanceOfferingReply;
    var APIGetGlobalPropertyReply = (function () {
        function APIGetGlobalPropertyReply() {
        }
        return APIGetGlobalPropertyReply;
    }());
    ApiHeader.APIGetGlobalPropertyReply = APIGetGlobalPropertyReply;
    var APIListDiskOfferingReply = (function () {
        function APIListDiskOfferingReply() {
        }
        return APIListDiskOfferingReply;
    }());
    ApiHeader.APIListDiskOfferingReply = APIListDiskOfferingReply;
    var APIListInstanceOfferingReply = (function () {
        function APIListInstanceOfferingReply() {
        }
        return APIListInstanceOfferingReply;
    }());
    ApiHeader.APIListInstanceOfferingReply = APIListInstanceOfferingReply;
    var APISearchDnsReply = (function () {
        function APISearchDnsReply() {
        }
        return APISearchDnsReply;
    }());
    ApiHeader.APISearchDnsReply = APISearchDnsReply;
    var APIGetInstanceOfferingReply = (function () {
        function APIGetInstanceOfferingReply() {
        }
        return APIGetInstanceOfferingReply;
    }());
    ApiHeader.APIGetInstanceOfferingReply = APIGetInstanceOfferingReply;
    var APIQueryDiskOfferingReply = (function () {
        function APIQueryDiskOfferingReply() {
        }
        return APIQueryDiskOfferingReply;
    }());
    ApiHeader.APIQueryDiskOfferingReply = APIQueryDiskOfferingReply;
    var APISearchDiskOfferingReply = (function () {
        function APISearchDiskOfferingReply() {
        }
        return APISearchDiskOfferingReply;
    }());
    ApiHeader.APISearchDiskOfferingReply = APISearchDiskOfferingReply;
    var APIGetDiskOfferingReply = (function () {
        function APIGetDiskOfferingReply() {
        }
        return APIGetDiskOfferingReply;
    }());
    ApiHeader.APIGetDiskOfferingReply = APIGetDiskOfferingReply;
    var APIQueryInstanceOfferingReply = (function () {
        function APIQueryInstanceOfferingReply() {
        }
        return APIQueryInstanceOfferingReply;
    }());
    ApiHeader.APIQueryInstanceOfferingReply = APIQueryInstanceOfferingReply;
    var APIListPrimaryStorageReply = (function () {
        function APIListPrimaryStorageReply() {
        }
        return APIListPrimaryStorageReply;
    }());
    ApiHeader.APIListPrimaryStorageReply = APIListPrimaryStorageReply;
    var APIGetPrimaryStorageTypesReply = (function () {
        function APIGetPrimaryStorageTypesReply() {
        }
        return APIGetPrimaryStorageTypesReply;
    }());
    ApiHeader.APIGetPrimaryStorageTypesReply = APIGetPrimaryStorageTypesReply;
    var CreateTemplateFromVolumeOnPrimaryStorageReply = (function () {
        function CreateTemplateFromVolumeOnPrimaryStorageReply() {
        }
        return CreateTemplateFromVolumeOnPrimaryStorageReply;
    }());
    ApiHeader.CreateTemplateFromVolumeOnPrimaryStorageReply = CreateTemplateFromVolumeOnPrimaryStorageReply;
    var APIGetPrimaryStorageReply = (function () {
        function APIGetPrimaryStorageReply() {
        }
        return APIGetPrimaryStorageReply;
    }());
    ApiHeader.APIGetPrimaryStorageReply = APIGetPrimaryStorageReply;
    var APISearchPrimaryStorageReply = (function () {
        function APISearchPrimaryStorageReply() {
        }
        return APISearchPrimaryStorageReply;
    }());
    ApiHeader.APISearchPrimaryStorageReply = APISearchPrimaryStorageReply;
    var APIGetPrimaryStorageAllocatorStrategiesReply = (function () {
        function APIGetPrimaryStorageAllocatorStrategiesReply() {
        }
        return APIGetPrimaryStorageAllocatorStrategiesReply;
    }());
    ApiHeader.APIGetPrimaryStorageAllocatorStrategiesReply = APIGetPrimaryStorageAllocatorStrategiesReply;
    var APIQueryPrimaryStorageReply = (function () {
        function APIQueryPrimaryStorageReply() {
        }
        return APIQueryPrimaryStorageReply;
    }());
    ApiHeader.APIQueryPrimaryStorageReply = APIQueryPrimaryStorageReply;
    var APIGetPrimaryStorageCapacityReply = (function () {
        function APIGetPrimaryStorageCapacityReply() {
        }
        return APIGetPrimaryStorageCapacityReply;
    }());
    ApiHeader.APIGetPrimaryStorageCapacityReply = APIGetPrimaryStorageCapacityReply;
    var APIQueryVolumeSnapshotReply = (function () {
        function APIQueryVolumeSnapshotReply() {
        }
        return APIQueryVolumeSnapshotReply;
    }());
    ApiHeader.APIQueryVolumeSnapshotReply = APIQueryVolumeSnapshotReply;
    var SnapshotLeafInventory = (function () {
        function SnapshotLeafInventory() {
        }
        return SnapshotLeafInventory;
    }());
    ApiHeader.SnapshotLeafInventory = SnapshotLeafInventory;
    var VolumeSnapshotTreeInventory = (function () {
        function VolumeSnapshotTreeInventory() {
        }
        return VolumeSnapshotTreeInventory;
    }());
    ApiHeader.VolumeSnapshotTreeInventory = VolumeSnapshotTreeInventory;
    var APIQueryVolumeSnapshotTreeReply = (function () {
        function APIQueryVolumeSnapshotTreeReply() {
        }
        return APIQueryVolumeSnapshotTreeReply;
    }());
    ApiHeader.APIQueryVolumeSnapshotTreeReply = APIQueryVolumeSnapshotTreeReply;
    var APIGetVolumeSnapshotTreeReply = (function () {
        function APIGetVolumeSnapshotTreeReply() {
        }
        return APIGetVolumeSnapshotTreeReply;
    }());
    ApiHeader.APIGetVolumeSnapshotTreeReply = APIGetVolumeSnapshotTreeReply;
    var APISearchBackupStorageReply = (function () {
        function APISearchBackupStorageReply() {
        }
        return APISearchBackupStorageReply;
    }());
    ApiHeader.APISearchBackupStorageReply = APISearchBackupStorageReply;
    var APIGetBackupStorageCapacityReply = (function () {
        function APIGetBackupStorageCapacityReply() {
        }
        return APIGetBackupStorageCapacityReply;
    }());
    ApiHeader.APIGetBackupStorageCapacityReply = APIGetBackupStorageCapacityReply;
    var APIQueryBackupStorageReply = (function () {
        function APIQueryBackupStorageReply() {
        }
        return APIQueryBackupStorageReply;
    }());
    ApiHeader.APIQueryBackupStorageReply = APIQueryBackupStorageReply;
    var APIGetBackupStorageTypesReply = (function () {
        function APIGetBackupStorageTypesReply() {
        }
        return APIGetBackupStorageTypesReply;
    }());
    ApiHeader.APIGetBackupStorageTypesReply = APIGetBackupStorageTypesReply;
    var APIGetBackupStorageReply = (function () {
        function APIGetBackupStorageReply() {
        }
        return APIGetBackupStorageReply;
    }());
    ApiHeader.APIGetBackupStorageReply = APIGetBackupStorageReply;
    var APIListBackupStorageReply = (function () {
        function APIListBackupStorageReply() {
        }
        return APIListBackupStorageReply;
    }());
    ApiHeader.APIListBackupStorageReply = APIListBackupStorageReply;
    var APIListIpRangeReply = (function () {
        function APIListIpRangeReply() {
        }
        return APIListIpRangeReply;
    }());
    ApiHeader.APIListIpRangeReply = APIListIpRangeReply;
    var APISearchL3NetworkReply = (function () {
        function APISearchL3NetworkReply() {
        }
        return APISearchL3NetworkReply;
    }());
    ApiHeader.APISearchL3NetworkReply = APISearchL3NetworkReply;
    var APIGetL3NetworkTypesReply = (function () {
        function APIGetL3NetworkTypesReply() {
        }
        return APIGetL3NetworkTypesReply;
    }());
    ApiHeader.APIGetL3NetworkTypesReply = APIGetL3NetworkTypesReply;
    var APIGetL3NetworkReply = (function () {
        function APIGetL3NetworkReply() {
        }
        return APIGetL3NetworkReply;
    }());
    ApiHeader.APIGetL3NetworkReply = APIGetL3NetworkReply;
    var APIGetIpAddressCapacityReply = (function () {
        function APIGetIpAddressCapacityReply() {
        }
        return APIGetIpAddressCapacityReply;
    }());
    ApiHeader.APIGetIpAddressCapacityReply = APIGetIpAddressCapacityReply;
    var APIQueryL3NetworkReply = (function () {
        function APIQueryL3NetworkReply() {
        }
        return APIQueryL3NetworkReply;
    }());
    ApiHeader.APIQueryL3NetworkReply = APIQueryL3NetworkReply;
    var FreeIpInventory = (function () {
        function FreeIpInventory() {
        }
        return FreeIpInventory;
    }());
    ApiHeader.FreeIpInventory = FreeIpInventory;
    var APIGetFreeIpReply = (function () {
        function APIGetFreeIpReply() {
        }
        return APIGetFreeIpReply;
    }());
    ApiHeader.APIGetFreeIpReply = APIGetFreeIpReply;
    var APIQueryIpRangeReply = (function () {
        function APIQueryIpRangeReply() {
        }
        return APIQueryIpRangeReply;
    }());
    ApiHeader.APIQueryIpRangeReply = APIQueryIpRangeReply;
    var APIListL3NetworkReply = (function () {
        function APIListL3NetworkReply() {
        }
        return APIListL3NetworkReply;
    }());
    ApiHeader.APIListL3NetworkReply = APIListL3NetworkReply;
    var APIQueryNetworkServiceL3NetworkRefReply = (function () {
        function APIQueryNetworkServiceL3NetworkRefReply() {
        }
        return APIQueryNetworkServiceL3NetworkRefReply;
    }());
    ApiHeader.APIQueryNetworkServiceL3NetworkRefReply = APIQueryNetworkServiceL3NetworkRefReply;
    var APISearchNetworkServiceProviderReply = (function () {
        function APISearchNetworkServiceProviderReply() {
        }
        return APISearchNetworkServiceProviderReply;
    }());
    ApiHeader.APISearchNetworkServiceProviderReply = APISearchNetworkServiceProviderReply;
    var APIGetNetworkServiceProviderReply = (function () {
        function APIGetNetworkServiceProviderReply() {
        }
        return APIGetNetworkServiceProviderReply;
    }());
    ApiHeader.APIGetNetworkServiceProviderReply = APIGetNetworkServiceProviderReply;
    var APIGetNetworkServiceTypesReply = (function () {
        function APIGetNetworkServiceTypesReply() {
        }
        return APIGetNetworkServiceTypesReply;
    }());
    ApiHeader.APIGetNetworkServiceTypesReply = APIGetNetworkServiceTypesReply;
    var APIListNetworkServiceProviderReply = (function () {
        function APIListNetworkServiceProviderReply() {
        }
        return APIListNetworkServiceProviderReply;
    }());
    ApiHeader.APIListNetworkServiceProviderReply = APIListNetworkServiceProviderReply;
    var APIQueryNetworkServiceProviderReply = (function () {
        function APIQueryNetworkServiceProviderReply() {
        }
        return APIQueryNetworkServiceProviderReply;
    }());
    ApiHeader.APIQueryNetworkServiceProviderReply = APIQueryNetworkServiceProviderReply;
    var APIGetL2VlanNetworkReply = (function () {
        function APIGetL2VlanNetworkReply() {
        }
        return APIGetL2VlanNetworkReply;
    }());
    ApiHeader.APIGetL2VlanNetworkReply = APIGetL2VlanNetworkReply;
    var APIGetL2NetworkReply = (function () {
        function APIGetL2NetworkReply() {
        }
        return APIGetL2NetworkReply;
    }());
    ApiHeader.APIGetL2NetworkReply = APIGetL2NetworkReply;
    var APIQueryL2VlanNetworkReply = (function () {
        function APIQueryL2VlanNetworkReply() {
        }
        return APIQueryL2VlanNetworkReply;
    }());
    ApiHeader.APIQueryL2VlanNetworkReply = APIQueryL2VlanNetworkReply;
    var APIGetL2NetworkTypesReply = (function () {
        function APIGetL2NetworkTypesReply() {
        }
        return APIGetL2NetworkTypesReply;
    }());
    ApiHeader.APIGetL2NetworkTypesReply = APIGetL2NetworkTypesReply;
    var APIListL2VlanNetworkReply = (function () {
        function APIListL2VlanNetworkReply() {
        }
        return APIListL2VlanNetworkReply;
    }());
    ApiHeader.APIListL2VlanNetworkReply = APIListL2VlanNetworkReply;
    var APISearchL2VlanNetworkReply = (function () {
        function APISearchL2VlanNetworkReply() {
        }
        return APISearchL2VlanNetworkReply;
    }());
    ApiHeader.APISearchL2VlanNetworkReply = APISearchL2VlanNetworkReply;
    var APIQueryL2NetworkReply = (function () {
        function APIQueryL2NetworkReply() {
        }
        return APIQueryL2NetworkReply;
    }());
    ApiHeader.APIQueryL2NetworkReply = APIQueryL2NetworkReply;
    var APISearchL2NetworkReply = (function () {
        function APISearchL2NetworkReply() {
        }
        return APISearchL2NetworkReply;
    }());
    ApiHeader.APISearchL2NetworkReply = APISearchL2NetworkReply;
    var APIListL2NetworkReply = (function () {
        function APIListL2NetworkReply() {
        }
        return APIListL2NetworkReply;
    }());
    ApiHeader.APIListL2NetworkReply = APIListL2NetworkReply;
    var APISearchReply = (function () {
        function APISearchReply() {
        }
        return APISearchReply;
    }());
    ApiHeader.APISearchReply = APISearchReply;
    var APIQueryUserTagReply = (function () {
        function APIQueryUserTagReply() {
        }
        return APIQueryUserTagReply;
    }());
    ApiHeader.APIQueryUserTagReply = APIQueryUserTagReply;
    var APIQuerySystemTagReply = (function () {
        function APIQuerySystemTagReply() {
        }
        return APIQuerySystemTagReply;
    }());
    ApiHeader.APIQuerySystemTagReply = APIQuerySystemTagReply;
    var APIQueryTagReply = (function () {
        function APIQueryTagReply() {
        }
        return APIQueryTagReply;
    }());
    ApiHeader.APIQueryTagReply = APIQueryTagReply;
    var ManagementNodeInventory = (function () {
        function ManagementNodeInventory() {
        }
        return ManagementNodeInventory;
    }());
    ApiHeader.ManagementNodeInventory = ManagementNodeInventory;
    var APIQueryManagementNodeReply = (function () {
        function APIQueryManagementNodeReply() {
        }
        return APIQueryManagementNodeReply;
    }());
    ApiHeader.APIQueryManagementNodeReply = APIQueryManagementNodeReply;
    var APIListManagementNodeReply = (function () {
        function APIListManagementNodeReply() {
        }
        return APIListManagementNodeReply;
    }());
    ApiHeader.APIListManagementNodeReply = APIListManagementNodeReply;
    var APIReply = (function () {
        function APIReply() {
        }
        return APIReply;
    }());
    ApiHeader.APIReply = APIReply;
    var APISearchClusterReply = (function () {
        function APISearchClusterReply() {
        }
        return APISearchClusterReply;
    }());
    ApiHeader.APISearchClusterReply = APISearchClusterReply;
    var APIListClusterReply = (function () {
        function APIListClusterReply() {
        }
        return APIListClusterReply;
    }());
    ApiHeader.APIListClusterReply = APIListClusterReply;
    var APIGetClusterReply = (function () {
        function APIGetClusterReply() {
        }
        return APIGetClusterReply;
    }());
    ApiHeader.APIGetClusterReply = APIGetClusterReply;
    var APIQueryClusterReply = (function () {
        function APIQueryClusterReply() {
        }
        return APIQueryClusterReply;
    }());
    ApiHeader.APIQueryClusterReply = APIQueryClusterReply;
    var APIListUserReply = (function () {
        function APIListUserReply() {
        }
        return APIListUserReply;
    }());
    ApiHeader.APIListUserReply = APIListUserReply;
    var APIQueryUserGroupReply = (function () {
        function APIQueryUserGroupReply() {
        }
        return APIQueryUserGroupReply;
    }());
    ApiHeader.APIQueryUserGroupReply = APIQueryUserGroupReply;
    var APIGetUserReply = (function () {
        function APIGetUserReply() {
        }
        return APIGetUserReply;
    }());
    ApiHeader.APIGetUserReply = APIGetUserReply;
    var APIGetAccountReply = (function () {
        function APIGetAccountReply() {
        }
        return APIGetAccountReply;
    }());
    ApiHeader.APIGetAccountReply = APIGetAccountReply;
    var APIQueryUserReply = (function () {
        function APIQueryUserReply() {
        }
        return APIQueryUserReply;
    }());
    ApiHeader.APIQueryUserReply = APIQueryUserReply;
    var APIListAccountReply = (function () {
        function APIListAccountReply() {
        }
        return APIListAccountReply;
    }());
    ApiHeader.APIListAccountReply = APIListAccountReply;
    var APISearchPolicyReply = (function () {
        function APISearchPolicyReply() {
        }
        return APISearchPolicyReply;
    }());
    ApiHeader.APISearchPolicyReply = APISearchPolicyReply;
    var APIQueryAccountReply = (function () {
        function APIQueryAccountReply() {
        }
        return APIQueryAccountReply;
    }());
    ApiHeader.APIQueryAccountReply = APIQueryAccountReply;
    var APILogOutReply = (function () {
        function APILogOutReply() {
        }
        return APILogOutReply;
    }());
    ApiHeader.APILogOutReply = APILogOutReply;
    var APISearchUserGroupReply = (function () {
        function APISearchUserGroupReply() {
        }
        return APISearchUserGroupReply;
    }());
    ApiHeader.APISearchUserGroupReply = APISearchUserGroupReply;
    var APIGetPolicyReply = (function () {
        function APIGetPolicyReply() {
        }
        return APIGetPolicyReply;
    }());
    ApiHeader.APIGetPolicyReply = APIGetPolicyReply;
    var APILogInReply = (function () {
        function APILogInReply() {
        }
        return APILogInReply;
    }());
    ApiHeader.APILogInReply = APILogInReply;
    var APIListPolicyReply = (function () {
        function APIListPolicyReply() {
        }
        return APIListPolicyReply;
    }());
    ApiHeader.APIListPolicyReply = APIListPolicyReply;
    var APIQueryQuotaReply = (function () {
        function APIQueryQuotaReply() {
        }
        return APIQueryQuotaReply;
    }());
    ApiHeader.APIQueryQuotaReply = APIQueryQuotaReply;
    var APIGetUserGroupReply = (function () {
        function APIGetUserGroupReply() {
        }
        return APIGetUserGroupReply;
    }());
    ApiHeader.APIGetUserGroupReply = APIGetUserGroupReply;
    var APIQueryPolicyReply = (function () {
        function APIQueryPolicyReply() {
        }
        return APIQueryPolicyReply;
    }());
    ApiHeader.APIQueryPolicyReply = APIQueryPolicyReply;
    var APISearchAccountReply = (function () {
        function APISearchAccountReply() {
        }
        return APISearchAccountReply;
    }());
    ApiHeader.APISearchAccountReply = APISearchAccountReply;
    var APISearchUserReply = (function () {
        function APISearchUserReply() {
        }
        return APISearchUserReply;
    }());
    ApiHeader.APISearchUserReply = APISearchUserReply;
    var APIValidateSessionReply = (function () {
        function APIValidateSessionReply() {
        }
        return APIValidateSessionReply;
    }());
    ApiHeader.APIValidateSessionReply = APIValidateSessionReply;
    var APIGetZoneReply = (function () {
        function APIGetZoneReply() {
        }
        return APIGetZoneReply;
    }());
    ApiHeader.APIGetZoneReply = APIGetZoneReply;
    var APISearchZoneReply = (function () {
        function APISearchZoneReply() {
        }
        return APISearchZoneReply;
    }());
    ApiHeader.APISearchZoneReply = APISearchZoneReply;
    var APIListZonesReply = (function () {
        function APIListZonesReply() {
        }
        return APIListZonesReply;
    }());
    ApiHeader.APIListZonesReply = APIListZonesReply;
    var APIQueryZoneReply = (function () {
        function APIQueryZoneReply() {
        }
        return APIQueryZoneReply;
    }());
    ApiHeader.APIQueryZoneReply = APIQueryZoneReply;
    var APIGetHypervisorTypesReply = (function () {
        function APIGetHypervisorTypesReply() {
        }
        return APIGetHypervisorTypesReply;
    }());
    ApiHeader.APIGetHypervisorTypesReply = APIGetHypervisorTypesReply;
    var APIGetHostReply = (function () {
        function APIGetHostReply() {
        }
        return APIGetHostReply;
    }());
    ApiHeader.APIGetHostReply = APIGetHostReply;
    var APIListHostReply = (function () {
        function APIListHostReply() {
        }
        return APIListHostReply;
    }());
    ApiHeader.APIListHostReply = APIListHostReply;
    var APISearchHostReply = (function () {
        function APISearchHostReply() {
        }
        return APISearchHostReply;
    }());
    ApiHeader.APISearchHostReply = APISearchHostReply;
    var APIQueryHostReply = (function () {
        function APIQueryHostReply() {
        }
        return APIQueryHostReply;
    }());
    ApiHeader.APIQueryHostReply = APIQueryHostReply;
    var APIQueryApplianceVmReply = (function () {
        function APIQueryApplianceVmReply() {
        }
        return APIQueryApplianceVmReply;
    }());
    ApiHeader.APIQueryApplianceVmReply = APIQueryApplianceVmReply;
    var APIListApplianceVmReply = (function () {
        function APIListApplianceVmReply() {
        }
        return APIListApplianceVmReply;
    }());
    ApiHeader.APIListApplianceVmReply = APIListApplianceVmReply;
    var IscsiFileSystemBackendPrimaryStorageInventory = (function () {
        function IscsiFileSystemBackendPrimaryStorageInventory() {
        }
        return IscsiFileSystemBackendPrimaryStorageInventory;
    }());
    ApiHeader.IscsiFileSystemBackendPrimaryStorageInventory = IscsiFileSystemBackendPrimaryStorageInventory;
    var APIQueryIscsiFileSystemBackendPrimaryStorageReply = (function () {
        function APIQueryIscsiFileSystemBackendPrimaryStorageReply() {
        }
        return APIQueryIscsiFileSystemBackendPrimaryStorageReply;
    }());
    ApiHeader.APIQueryIscsiFileSystemBackendPrimaryStorageReply = APIQueryIscsiFileSystemBackendPrimaryStorageReply;
    var APIGetSftpBackupStorageReply = (function () {
        function APIGetSftpBackupStorageReply() {
        }
        return APIGetSftpBackupStorageReply;
    }());
    ApiHeader.APIGetSftpBackupStorageReply = APIGetSftpBackupStorageReply;
    var APIQuerySftpBackupStorageReply = (function () {
        function APIQuerySftpBackupStorageReply() {
        }
        return APIQuerySftpBackupStorageReply;
    }());
    ApiHeader.APIQuerySftpBackupStorageReply = APIQuerySftpBackupStorageReply;
    var APISearchSftpBackupStorageReply = (function () {
        function APISearchSftpBackupStorageReply() {
        }
        return APISearchSftpBackupStorageReply;
    }());
    ApiHeader.APISearchSftpBackupStorageReply = APISearchSftpBackupStorageReply;
    var APISearchVirtualRouterVmReply = (function () {
        function APISearchVirtualRouterVmReply() {
        }
        return APISearchVirtualRouterVmReply;
    }());
    ApiHeader.APISearchVirtualRouterVmReply = APISearchVirtualRouterVmReply;
    var APIGetVirtualRouterOfferingReply = (function () {
        function APIGetVirtualRouterOfferingReply() {
        }
        return APIGetVirtualRouterOfferingReply;
    }());
    ApiHeader.APIGetVirtualRouterOfferingReply = APIGetVirtualRouterOfferingReply;
    var APISearchVirtualRouterOffingReply = (function () {
        function APISearchVirtualRouterOffingReply() {
        }
        return APISearchVirtualRouterOffingReply;
    }());
    ApiHeader.APISearchVirtualRouterOffingReply = APISearchVirtualRouterOffingReply;
    var VirtualRouterOfferingInventory = (function () {
        function VirtualRouterOfferingInventory() {
        }
        return VirtualRouterOfferingInventory;
    }());
    ApiHeader.VirtualRouterOfferingInventory = VirtualRouterOfferingInventory;
    var APIQueryVirtualRouterOfferingReply = (function () {
        function APIQueryVirtualRouterOfferingReply() {
        }
        return APIQueryVirtualRouterOfferingReply;
    }());
    ApiHeader.APIQueryVirtualRouterOfferingReply = APIQueryVirtualRouterOfferingReply;
    var VirtualRouterVmInventory = (function () {
        function VirtualRouterVmInventory() {
        }
        return VirtualRouterVmInventory;
    }());
    ApiHeader.VirtualRouterVmInventory = VirtualRouterVmInventory;
    var APIQueryVirtualRouterVmReply = (function () {
        function APIQueryVirtualRouterVmReply() {
        }
        return APIQueryVirtualRouterVmReply;
    }());
    ApiHeader.APIQueryVirtualRouterVmReply = APIQueryVirtualRouterVmReply;
    var APIQueryPortForwardingRuleReply = (function () {
        function APIQueryPortForwardingRuleReply() {
        }
        return APIQueryPortForwardingRuleReply;
    }());
    ApiHeader.APIQueryPortForwardingRuleReply = APIQueryPortForwardingRuleReply;
    var APIListPortForwardingRuleReply = (function () {
        function APIListPortForwardingRuleReply() {
        }
        return APIListPortForwardingRuleReply;
    }());
    ApiHeader.APIListPortForwardingRuleReply = APIListPortForwardingRuleReply;
    var APIGetPortForwardingAttachableVmNicsReply = (function () {
        function APIGetPortForwardingAttachableVmNicsReply() {
        }
        return APIGetPortForwardingAttachableVmNicsReply;
    }());
    ApiHeader.APIGetPortForwardingAttachableVmNicsReply = APIGetPortForwardingAttachableVmNicsReply;
    var APIQueryEipReply = (function () {
        function APIQueryEipReply() {
        }
        return APIQueryEipReply;
    }());
    ApiHeader.APIQueryEipReply = APIQueryEipReply;
    var APIGetEipAttachableVmNicsReply = (function () {
        function APIGetEipAttachableVmNicsReply() {
        }
        return APIGetEipAttachableVmNicsReply;
    }());
    ApiHeader.APIGetEipAttachableVmNicsReply = APIGetEipAttachableVmNicsReply;
    var APIQueryLoadBalancerListenerReply = (function () {
        function APIQueryLoadBalancerListenerReply() {
        }
        return APIQueryLoadBalancerListenerReply;
    }());
    ApiHeader.APIQueryLoadBalancerListenerReply = APIQueryLoadBalancerListenerReply;
    var APIQueryLoadBalancerReply = (function () {
        function APIQueryLoadBalancerReply() {
        }
        return APIQueryLoadBalancerReply;
    }());
    ApiHeader.APIQueryLoadBalancerReply = APIQueryLoadBalancerReply;
    var APIListSecurityGroupReply = (function () {
        function APIListSecurityGroupReply() {
        }
        return APIListSecurityGroupReply;
    }());
    ApiHeader.APIListSecurityGroupReply = APIListSecurityGroupReply;
    var APIQuerySecurityGroupRuleReply = (function () {
        function APIQuerySecurityGroupRuleReply() {
        }
        return APIQuerySecurityGroupRuleReply;
    }());
    ApiHeader.APIQuerySecurityGroupRuleReply = APIQuerySecurityGroupRuleReply;
    var APIGetCandidateVmNicForSecurityGroupReply = (function () {
        function APIGetCandidateVmNicForSecurityGroupReply() {
        }
        return APIGetCandidateVmNicForSecurityGroupReply;
    }());
    ApiHeader.APIGetCandidateVmNicForSecurityGroupReply = APIGetCandidateVmNicForSecurityGroupReply;
    var VmNicSecurityGroupRefInventory = (function () {
        function VmNicSecurityGroupRefInventory() {
        }
        return VmNicSecurityGroupRefInventory;
    }());
    ApiHeader.VmNicSecurityGroupRefInventory = VmNicSecurityGroupRefInventory;
    var APIListVmNicInSecurityGroupReply = (function () {
        function APIListVmNicInSecurityGroupReply() {
        }
        return APIListVmNicInSecurityGroupReply;
    }());
    ApiHeader.APIListVmNicInSecurityGroupReply = APIListVmNicInSecurityGroupReply;
    var APIQuerySecurityGroupReply = (function () {
        function APIQuerySecurityGroupReply() {
        }
        return APIQuerySecurityGroupReply;
    }());
    ApiHeader.APIQuerySecurityGroupReply = APIQuerySecurityGroupReply;
    var APIQueryVmNicInSecurityGroupReply = (function () {
        function APIQueryVmNicInSecurityGroupReply() {
        }
        return APIQueryVmNicInSecurityGroupReply;
    }());
    ApiHeader.APIQueryVmNicInSecurityGroupReply = APIQueryVmNicInSecurityGroupReply;
    var APIQueryVipReply = (function () {
        function APIQueryVipReply() {
        }
        return APIQueryVipReply;
    }());
    ApiHeader.APIQueryVipReply = APIQueryVipReply;
    var HostCapacityInventory = (function () {
        function HostCapacityInventory() {
        }
        return HostCapacityInventory;
    }());
    ApiHeader.HostCapacityInventory = HostCapacityInventory;
    var ConsoleProxyInventory = (function () {
        function ConsoleProxyInventory() {
        }
        return ConsoleProxyInventory;
    }());
    ApiHeader.ConsoleProxyInventory = ConsoleProxyInventory;
    var PrimaryStorageClusterRefInventory = (function () {
        function PrimaryStorageClusterRefInventory() {
        }
        return PrimaryStorageClusterRefInventory;
    }());
    ApiHeader.PrimaryStorageClusterRefInventory = PrimaryStorageClusterRefInventory;
    var PrimaryStorageCapacityInventory = (function () {
        function PrimaryStorageCapacityInventory() {
        }
        return PrimaryStorageCapacityInventory;
    }());
    ApiHeader.PrimaryStorageCapacityInventory = PrimaryStorageCapacityInventory;
    var BackupStorageZoneRefInventory = (function () {
        function BackupStorageZoneRefInventory() {
        }
        return BackupStorageZoneRefInventory;
    }());
    ApiHeader.BackupStorageZoneRefInventory = BackupStorageZoneRefInventory;
    var IpUseInventory = (function () {
        function IpUseInventory() {
        }
        return IpUseInventory;
    }());
    ApiHeader.IpUseInventory = IpUseInventory;
    var L3NetworkDnsInventory = (function () {
        function L3NetworkDnsInventory() {
        }
        return L3NetworkDnsInventory;
    }());
    ApiHeader.L3NetworkDnsInventory = L3NetworkDnsInventory;
    var NetworkServiceTypeInventory = (function () {
        function NetworkServiceTypeInventory() {
        }
        return NetworkServiceTypeInventory;
    }());
    ApiHeader.NetworkServiceTypeInventory = NetworkServiceTypeInventory;
    var NetworkServiceProviderL2NetworkRefInventory = (function () {
        function NetworkServiceProviderL2NetworkRefInventory() {
        }
        return NetworkServiceProviderL2NetworkRefInventory;
    }());
    ApiHeader.NetworkServiceProviderL2NetworkRefInventory = NetworkServiceProviderL2NetworkRefInventory;
    var L2NetworkClusterRefInventory = (function () {
        function L2NetworkClusterRefInventory() {
        }
        return L2NetworkClusterRefInventory;
    }());
    ApiHeader.L2NetworkClusterRefInventory = L2NetworkClusterRefInventory;
    var AccountResourceRefInventory = (function () {
        function AccountResourceRefInventory() {
        }
        return AccountResourceRefInventory;
    }());
    ApiHeader.AccountResourceRefInventory = AccountResourceRefInventory;
    var UserGroupPolicyRefInventory = (function () {
        function UserGroupPolicyRefInventory() {
        }
        return UserGroupPolicyRefInventory;
    }());
    ApiHeader.UserGroupPolicyRefInventory = UserGroupPolicyRefInventory;
    var UserPolicyRefInventory = (function () {
        function UserPolicyRefInventory() {
        }
        return UserPolicyRefInventory;
    }());
    ApiHeader.UserPolicyRefInventory = UserPolicyRefInventory;
    var UserGroupUserRefInventory = (function () {
        function UserGroupUserRefInventory() {
        }
        return UserGroupUserRefInventory;
    }());
    ApiHeader.UserGroupUserRefInventory = UserGroupUserRefInventory;
    var SimulatorHostInventory = (function () {
        function SimulatorHostInventory() {
        }
        return SimulatorHostInventory;
    }());
    ApiHeader.SimulatorHostInventory = SimulatorHostInventory;
    var ApplianceVmFirewallRuleInventory = (function () {
        function ApplianceVmFirewallRuleInventory() {
        }
        return ApplianceVmFirewallRuleInventory;
    }());
    ApiHeader.ApplianceVmFirewallRuleInventory = ApplianceVmFirewallRuleInventory;
    var KVMHostInventory = (function () {
        function KVMHostInventory() {
        }
        return KVMHostInventory;
    }());
    ApiHeader.KVMHostInventory = KVMHostInventory;
    var VirtualRouterEipRefInventory = (function () {
        function VirtualRouterEipRefInventory() {
        }
        return VirtualRouterEipRefInventory;
    }());
    ApiHeader.VirtualRouterEipRefInventory = VirtualRouterEipRefInventory;
    var VirtualRouterLoadBalancerRefInventory = (function () {
        function VirtualRouterLoadBalancerRefInventory() {
        }
        return VirtualRouterLoadBalancerRefInventory;
    }());
    ApiHeader.VirtualRouterLoadBalancerRefInventory = VirtualRouterLoadBalancerRefInventory;
    var VirtualRouterVipInventory = (function () {
        function VirtualRouterVipInventory() {
        }
        return VirtualRouterVipInventory;
    }());
    ApiHeader.VirtualRouterVipInventory = VirtualRouterVipInventory;
    var VirtualRouterPortForwardingRuleRefInventory = (function () {
        function VirtualRouterPortForwardingRuleRefInventory() {
        }
        return VirtualRouterPortForwardingRuleRefInventory;
    }());
    ApiHeader.VirtualRouterPortForwardingRuleRefInventory = VirtualRouterPortForwardingRuleRefInventory;
    var SecurityGroupL3NetworkRefInventory = (function () {
        function SecurityGroupL3NetworkRefInventory() {
        }
        return SecurityGroupL3NetworkRefInventory;
    }());
    ApiHeader.SecurityGroupL3NetworkRefInventory = SecurityGroupL3NetworkRefInventory;
    ApiHeader.GlobalConfigInventoryQueryable = ['name', 'category', 'description', 'defaultValue', 'value'];
    ApiHeader.TagResourceTypeGlobalConfigVO = 'GlobalConfigVO';
    ApiHeader.HostCapacityInventoryQueryable = ['uuid', 'totalMemory', 'totalCpu', 'availableMemory', 'availableCpu'];
    ApiHeader.TagResourceTypeHostCapacityVO = 'HostCapacityVO';
    ApiHeader.VmNicInventoryQueryable = ['uuid', 'vmInstanceUuid', 'l3NetworkUuid', 'ip', 'mac', 'netmask', 'gateway', 'metaData', 'deviceId', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeVmNicVO = 'VmNicVO';
    ApiHeader.VmInstanceInventoryQueryable = ['uuid', 'name', 'description', 'zoneUuid', 'clusterUuid', 'imageUuid', 'hostUuid', 'lastHostUuid', 'instanceOfferingUuid', 'rootVolumeUuid', 'platform', 'defaultL3NetworkUuid', 'type', 'hypervisorType', 'memorySize', 'cpuNum', 'cpuSpeed', 'allocatorStrategy', 'createDate', 'lastOpDate', 'state', 'vmNics.uuid', 'vmNics.vmInstanceUuid', 'vmNics.l3NetworkUuid', 'vmNics.ip', 'vmNics.mac', 'vmNics.netmask', 'vmNics.gateway', 'vmNics.metaData', 'vmNics.deviceId', 'vmNics.createDate', 'vmNics.lastOpDate', 'allVolumes.uuid', 'allVolumes.name', 'allVolumes.description', 'allVolumes.primaryStorageUuid', 'allVolumes.vmInstanceUuid', 'allVolumes.diskOfferingUuid', 'allVolumes.rootImageUuid', 'allVolumes.installPath', 'allVolumes.type', 'allVolumes.format', 'allVolumes.size', 'allVolumes.deviceId', 'allVolumes.state', 'allVolumes.status', 'allVolumes.createDate', 'allVolumes.lastOpDate'];
    ApiHeader.TagResourceTypeVmInstanceVO = 'VmInstanceVO';
    ApiHeader.ImageInventoryQueryable = ['uuid', 'name', 'description', 'state', 'status', 'size', 'md5Sum', 'url', 'mediaType', 'guestOsType', 'type', 'platform', 'format', 'system', 'createDate', 'lastOpDate', 'backupStorageRefs.imageUuid', 'backupStorageRefs.backupStorageUuid', 'backupStorageRefs.installPath', 'backupStorageRefs.createDate', 'backupStorageRefs.lastOpDate'];
    ApiHeader.TagResourceTypeImageVO = 'ImageVO';
    ApiHeader.ImageBackupStorageRefInventoryQueryable = ['imageUuid', 'backupStorageUuid', 'installPath', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeImageBackupStorageRefVO = 'ImageBackupStorageRefVO';
    ApiHeader.ConsoleProxyInventoryQueryable = ['uuid', 'vmInstanceUuid', 'agentIp', 'token', 'agentType', 'proxyHostname', 'proxyPort', 'targetHostname', 'targetPort', 'scheme', 'proxyIdentity', 'status', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeConsoleProxyVO = 'ConsoleProxyVO';
    ApiHeader.VolumeInventoryQueryable = ['uuid', 'name', 'description', 'primaryStorageUuid', 'vmInstanceUuid', 'diskOfferingUuid', 'rootImageUuid', 'installPath', 'type', 'format', 'size', 'deviceId', 'state', 'status', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeVolumeVO = 'VolumeVO';
    ApiHeader.InstanceOfferingInventoryQueryable = ['uuid', 'name', 'description', 'cpuNum', 'cpuSpeed', 'memorySize', 'type', 'allocatorStrategy', 'sortKey', 'createDate', 'lastOpDate', 'state'];
    ApiHeader.TagResourceTypeInstanceOfferingVO = 'InstanceOfferingVO';
    ApiHeader.DiskOfferingInventoryQueryable = ['uuid', 'name', 'description', 'diskSize', 'sortKey', 'state', 'type', 'createDate', 'lastOpDate', 'allocatorStrategy'];
    ApiHeader.TagResourceTypeDiskOfferingVO = 'DiskOfferingVO';
    ApiHeader.PrimaryStorageInventoryQueryable = ['uuid', 'zoneUuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'totalPhysicalCapacity', 'availablePhysicalCapacity', 'type', 'state', 'status', 'mountPath', 'createDate', 'lastOpDate', 'attachedClusterUuids'];
    ApiHeader.TagResourceTypePrimaryStorageVO = 'PrimaryStorageVO';
    ApiHeader.PrimaryStorageClusterRefInventoryQueryable = ['id', 'clusterUuid', 'primaryStorageUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypePrimaryStorageClusterRefVO = 'PrimaryStorageClusterRefVO';
    ApiHeader.PrimaryStorageCapacityInventoryQueryable = ['uuid', 'totalCapacity', 'availableCapacity', 'totalPhysicalCapacity', 'availablePhsicalCapacity', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypePrimaryStorageCapacityVO = 'PrimaryStorageCapacityVO';
    ApiHeader.VolumeSnapshotInventoryQueryable = ['uuid', 'name', 'description', 'type', 'volumeUuid', 'treeUuid', 'parentUuid', 'primaryStorageUuid', 'primaryStorageInstallPath', 'volumeType', 'format', 'latest', 'size', 'state', 'status', 'createDate', 'lastOpDate', 'backupStorageRefs.volumeSnapshotUuid', 'backupStorageRefs.backupStorageUuid', 'backupStorageRefs.installPath'];
    ApiHeader.TagResourceTypeVolumeSnapshotVO = 'VolumeSnapshotVO';
    ApiHeader.VolumeSnapshotBackupStorageRefInventoryQueryable = ['volumeSnapshotUuid', 'backupStorageUuid', 'installPath'];
    ApiHeader.TagResourceTypeVolumeSnapshotBackupStorageRefVO = 'VolumeSnapshotBackupStorageRefVO';
    ApiHeader.VolumeSnapshotTreeInventoryQueryable = ['uuid', 'volumeUuid', 'current', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeVolumeSnapshotTreeVO = 'VolumeSnapshotTreeVO';
    ApiHeader.BackupStorageInventoryQueryable = ['uuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'type', 'state', 'status', 'createDate', 'lastOpDate', 'attachedZoneUuids'];
    ApiHeader.TagResourceTypeBackupStorageVO = 'BackupStorageVO';
    ApiHeader.BackupStorageZoneRefInventoryQueryable = ['id', 'backupStorageUuid', 'zoneUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeBackupStorageZoneRefVO = 'BackupStorageZoneRefVO';
    ApiHeader.IpRangeInventoryQueryable = ['uuid', 'l3NetworkUuid', 'name', 'description', 'startIp', 'endIp', 'netmask', 'gateway', 'networkCidr', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeIpRangeVO = 'IpRangeVO';
    ApiHeader.L3NetworkInventoryQueryable = ['uuid', 'name', 'description', 'type', 'zoneUuid', 'l2NetworkUuid', 'state', 'dnsDomain', 'system', 'createDate', 'lastOpDate', 'dns', 'ipRanges.uuid', 'ipRanges.l3NetworkUuid', 'ipRanges.name', 'ipRanges.description', 'ipRanges.startIp', 'ipRanges.endIp', 'ipRanges.netmask', 'ipRanges.gateway', 'ipRanges.networkCidr', 'ipRanges.createDate', 'ipRanges.lastOpDate', 'networkServices.l3NetworkUuid', 'networkServices.networkServiceProviderUuid', 'networkServices.networkServiceType'];
    ApiHeader.TagResourceTypeL3NetworkVO = 'L3NetworkVO';
    ApiHeader.IpUseInventoryQueryable = ['uuid', 'usedIpUuid', 'serviceId', 'use', 'details', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeIpUseVO = 'IpUseVO';
    ApiHeader.L3NetworkDnsInventoryQueryable = ['l3NetworkUuid', 'dns', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeL3NetworkDnsVO = 'L3NetworkDnsVO';
    ApiHeader.NetworkServiceL3NetworkRefInventoryQueryable = ['l3NetworkUuid', 'networkServiceProviderUuid', 'networkServiceType'];
    ApiHeader.TagResourceTypeNetworkServiceL3NetworkRefVO = 'NetworkServiceL3NetworkRefVO';
    ApiHeader.NetworkServiceTypeInventoryQueryable = ['networkServiceProviderUuid', 'type'];
    ApiHeader.TagResourceTypeNetworkServiceTypeVO = 'NetworkServiceTypeVO';
    ApiHeader.NetworkServiceProviderInventoryQueryable = ['uuid', 'name', 'description', 'type', 'createDate', 'lastOpDate', 'networkServiceTypes', 'attachedL2NetworkUuids'];
    ApiHeader.TagResourceTypeNetworkServiceProviderVO = 'NetworkServiceProviderVO';
    ApiHeader.NetworkServiceProviderL2NetworkRefInventoryQueryable = ['networkServiceProviderUuid', 'l2NetworkUuid'];
    ApiHeader.TagResourceTypeNetworkServiceProviderL2NetworkRefVO = 'NetworkServiceProviderL2NetworkRefVO';
    ApiHeader.L2VlanNetworkInventoryQueryable = ['vlan', 'uuid', 'name', 'description', 'zoneUuid', 'physicalInterface', 'type', 'createDate', 'lastOpDate', 'attachedClusterUuids'];
    ApiHeader.TagResourceTypeL2VlanNetworkVO = 'L2VlanNetworkVO';
    ApiHeader.L2NetworkClusterRefInventoryQueryable = ['clusterUuid', 'l2NetworkUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeL2NetworkClusterRefVO = 'L2NetworkClusterRefVO';
    ApiHeader.L2NetworkInventoryQueryable = ['uuid', 'name', 'description', 'zoneUuid', 'physicalInterface', 'type', 'createDate', 'lastOpDate', 'attachedClusterUuids'];
    ApiHeader.TagResourceTypeL2NetworkVO = 'L2NetworkVO';
    ApiHeader.UserTagInventoryQueryable = ['uuid', 'resourceUuid', 'resourceType', 'tag', 'type', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeUserTagVO = 'UserTagVO';
    ApiHeader.SystemTagInventoryQueryable = ['inherent', 'uuid', 'resourceUuid', 'resourceType', 'tag', 'type', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeSystemTagVO = 'SystemTagVO';
    ApiHeader.ManagementNodeInventoryQueryable = ['uuid', 'hostName', 'joinDate', 'heartBeat'];
    ApiHeader.TagResourceTypeManagementNodeVO = 'ManagementNodeVO';
    ApiHeader.ClusterInventoryQueryable = ['name', 'uuid', 'description', 'state', 'hypervisorType', 'createDate', 'lastOpDate', 'zoneUuid', 'type'];
    ApiHeader.TagResourceTypeClusterVO = 'ClusterVO';
    ApiHeader.UserInventoryQueryable = ['uuid', 'accountUuid', 'name', 'description', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeUserVO = 'UserVO';
    ApiHeader.UserGroupInventoryQueryable = ['uuid', 'accountUuid', 'name', 'description', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeUserGroupVO = 'UserGroupVO';
    ApiHeader.PolicyInventoryQueryable = ['statements.name', 'statements.effect', 'statements.principals', 'statements.actions', 'statements.resources', 'name', 'uuid', 'accountUuid'];
    ApiHeader.TagResourceTypePolicyVO = 'PolicyVO';
    ApiHeader.AccountResourceRefInventoryQueryable = ['accountUuid', 'ownerAccountUuid', 'resourceUuid', 'resourceType', 'permission', 'isShared', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeAccountResourceRefVO = 'AccountResourceRefVO';
    ApiHeader.UserGroupPolicyRefInventoryQueryable = ['groupUuid', 'policyUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeUserGroupPolicyRefVO = 'UserGroupPolicyRefVO';
    ApiHeader.AccountInventoryQueryable = ['uuid', 'name', 'description', 'type', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeAccountVO = 'AccountVO';
    ApiHeader.QuotaInventoryQueryable = ['name', 'identityUuid', 'identityType', 'value', 'lastOpDate', 'createDate'];
    ApiHeader.TagResourceTypeQuotaVO = 'QuotaVO';
    ApiHeader.UserPolicyRefInventoryQueryable = ['userUuid', 'policyUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeUserPolicyRefVO = 'UserPolicyRefVO';
    ApiHeader.UserGroupUserRefInventoryQueryable = ['userUuid', 'groupUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeUserGroupUserRefVO = 'UserGroupUserRefVO';
    ApiHeader.ZoneInventoryQueryable = ['uuid', 'name', 'description', 'state', 'type', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeZoneVO = 'ZoneVO';
    ApiHeader.HostInventoryQueryable = ['zoneUuid', 'name', 'uuid', 'clusterUuid', 'description', 'managementIp', 'hypervisorType', 'state', 'status', 'totalCpuCapacity', 'availableCpuCapacity', 'totalMemoryCapacity', 'availableMemoryCapacity', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeHostVO = 'HostVO';
    ApiHeader.SimulatorHostInventoryQueryable = ['memoryCapacity', 'cpuCapacity', 'zoneUuid', 'name', 'uuid', 'clusterUuid', 'description', 'managementIp', 'hypervisorType', 'state', 'status', 'totalCpuCapacity', 'availableCpuCapacity', 'totalMemoryCapacity', 'availableMemoryCapacity', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeSimulatorHostVO = 'SimulatorHostVO';
    ApiHeader.ApplianceVmFirewallRuleInventoryQueryable = ['applianceVmUuid', 'protocol', 'startPort', 'endPort', 'allowCidr', 'sourceIp', 'destIp', 'l3NetworkUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeApplianceVmFirewallRuleVO = 'ApplianceVmFirewallRuleVO';
    ApiHeader.ApplianceVmInventoryQueryable = ['applianceVmType', 'managementNetworkUuid', 'defaultRouteL3NetworkUuid', 'status', 'uuid', 'name', 'description', 'zoneUuid', 'clusterUuid', 'imageUuid', 'hostUuid', 'lastHostUuid', 'instanceOfferingUuid', 'rootVolumeUuid', 'platform', 'defaultL3NetworkUuid', 'type', 'hypervisorType', 'memorySize', 'cpuNum', 'cpuSpeed', 'allocatorStrategy', 'createDate', 'lastOpDate', 'state', 'vmNics.uuid', 'vmNics.vmInstanceUuid', 'vmNics.l3NetworkUuid', 'vmNics.ip', 'vmNics.mac', 'vmNics.netmask', 'vmNics.gateway', 'vmNics.metaData', 'vmNics.deviceId', 'vmNics.createDate', 'vmNics.lastOpDate', 'allVolumes.uuid', 'allVolumes.name', 'allVolumes.description', 'allVolumes.primaryStorageUuid', 'allVolumes.vmInstanceUuid', 'allVolumes.diskOfferingUuid', 'allVolumes.rootImageUuid', 'allVolumes.installPath', 'allVolumes.type', 'allVolumes.format', 'allVolumes.size', 'allVolumes.deviceId', 'allVolumes.state', 'allVolumes.status', 'allVolumes.createDate', 'allVolumes.lastOpDate'];
    ApiHeader.TagResourceTypeApplianceVmVO = 'ApplianceVmVO';
    ApiHeader.IscsiFileSystemBackendPrimaryStorageInventoryQueryable = ['chapUsername', 'hostname', 'sshUsername', 'filesystemType', 'uuid', 'zoneUuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'totalPhysicalCapacity', 'availablePhysicalCapacity', 'type', 'state', 'status', 'mountPath', 'createDate', 'lastOpDate', 'attachedClusterUuids'];
    ApiHeader.TagResourceTypeIscsiFileSystemBackendPrimaryStorageVO = 'IscsiFileSystemBackendPrimaryStorageVO';
    ApiHeader.CephPrimaryStorageInventoryQueryable = ['mons.hostname', 'mons.monPort', 'mons.createDate', 'mons.lastOpDate', 'mons.primaryStorageUuid', 'fsid', 'rootVolumePoolName', 'dataVolumePoolName', 'imageCachePoolName', 'uuid', 'zoneUuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'totalPhysicalCapacity', 'availablePhysicalCapacity', 'type', 'state', 'status', 'mountPath', 'createDate', 'lastOpDate', 'attachedClusterUuids'];
    ApiHeader.TagResourceTypeCephPrimaryStorageVO = 'CephPrimaryStorageVO';
    ApiHeader.CephPrimaryStorageMonInventoryQueryable = ['hostname', 'monPort', 'createDate', 'lastOpDate', 'primaryStorageUuid'];
    ApiHeader.TagResourceTypeCephPrimaryStorageMonVO = 'CephPrimaryStorageMonVO';
    ApiHeader.CephBackupStorageInventoryQueryable = ['mons.hostname', 'mons.monPort', 'mons.createDate', 'mons.lastOpDate', 'mons.backupStorageUuid', 'fsid', 'poolName', 'uuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'type', 'state', 'status', 'createDate', 'lastOpDate', 'attachedZoneUuids'];
    ApiHeader.TagResourceTypeCephBackupStorageVO = 'CephBackupStorageVO';
    ApiHeader.CephBackupStorageMonInventoryQueryable = ['hostname', 'monPort', 'createDate', 'lastOpDate', 'backupStorageUuid'];
    ApiHeader.TagResourceTypeCephBackupStorageMonVO = 'CephBackupStorageMonVO';
    ApiHeader.FusionstorPrimaryStorageInventoryQueryable = ['mons.hostname', 'mons.monPort', 'mons.createDate', 'mons.lastOpDate', 'mons.primaryStorageUuid', 'fsid', 'rootVolumePoolName', 'dataVolumePoolName', 'imageCachePoolName', 'uuid', 'zoneUuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'totalPhysicalCapacity', 'availablePhysicalCapacity', 'type', 'state', 'status', 'mountPath', 'createDate', 'lastOpDate', 'attachedClusterUuids'];
    ApiHeader.TagResourceTypeFusionstorPrimaryStorageVO = 'FusionstorPrimaryStorageVO';
    ApiHeader.FusionstorPrimaryStorageMonInventoryQueryable = ['hostname', 'monPort', 'createDate', 'lastOpDate', 'primaryStorageUuid'];
    ApiHeader.TagResourceTypeFusionstorPrimaryStorageMonVO = 'FusionstorPrimaryStorageMonVO';
    ApiHeader.FusionstorBackupStorageInventoryQueryable = ['mons.hostname', 'mons.monPort', 'mons.createDate', 'mons.lastOpDate', 'mons.backupStorageUuid', 'fsid', 'poolName', 'uuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'type', 'state', 'status', 'createDate', 'lastOpDate', 'attachedZoneUuids'];
    ApiHeader.TagResourceTypeFusionstorBackupStorageVO = 'FusionstorBackupStorageVO';
    ApiHeader.FusionstorBackupStorageMonInventoryQueryable = ['hostname', 'monPort', 'createDate', 'lastOpDate', 'backupStorageUuid'];
    ApiHeader.TagResourceTypeFusionstorBackupStorageMonVO = 'FusionstorBackupStorageMonVO';
    ApiHeader.KVMHostInventoryQueryable = ['username', 'zoneUuid', 'name', 'uuid', 'clusterUuid', 'description', 'managementIp', 'hypervisorType', 'state', 'status', 'totalCpuCapacity', 'availableCpuCapacity', 'totalMemoryCapacity', 'availableMemoryCapacity', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeKVMHostVO = 'KVMHostVO';
    ApiHeader.SftpBackupStorageInventoryQueryable = ['hostname', 'uuid', 'name', 'url', 'description', 'totalCapacity', 'availableCapacity', 'type', 'state', 'status', 'createDate', 'lastOpDate', 'attachedZoneUuids'];
    ApiHeader.TagResourceTypeSftpBackupStorageVO = 'SftpBackupStorageVO';
    ApiHeader.VirtualRouterOfferingInventoryQueryable = ['managementNetworkUuid', 'publicNetworkUuid', 'zoneUuid', 'isDefault', 'imageUuid', 'uuid', 'name', 'description', 'cpuNum', 'cpuSpeed', 'memorySize', 'type', 'allocatorStrategy', 'sortKey', 'createDate', 'lastOpDate', 'state'];
    ApiHeader.TagResourceTypeVirtualRouterOfferingVO = 'VirtualRouterOfferingVO';
    ApiHeader.VirtualRouterEipRefInventoryQueryable = ['eipUuid', 'virtualRouterVmUuid'];
    ApiHeader.TagResourceTypeVirtualRouterEipRefVO = 'VirtualRouterEipRefVO';
    ApiHeader.VirtualRouterVmInventoryQueryable = ['publicNetworkUuid', 'applianceVmType', 'managementNetworkUuid', 'defaultRouteL3NetworkUuid', 'status', 'uuid', 'name', 'description', 'zoneUuid', 'clusterUuid', 'imageUuid', 'hostUuid', 'lastHostUuid', 'instanceOfferingUuid', 'rootVolumeUuid', 'platform', 'defaultL3NetworkUuid', 'type', 'hypervisorType', 'memorySize', 'cpuNum', 'cpuSpeed', 'allocatorStrategy', 'createDate', 'lastOpDate', 'state', 'vmNics.uuid', 'vmNics.vmInstanceUuid', 'vmNics.l3NetworkUuid', 'vmNics.ip', 'vmNics.mac', 'vmNics.netmask', 'vmNics.gateway', 'vmNics.metaData', 'vmNics.deviceId', 'vmNics.createDate', 'vmNics.lastOpDate', 'allVolumes.uuid', 'allVolumes.name', 'allVolumes.description', 'allVolumes.primaryStorageUuid', 'allVolumes.vmInstanceUuid', 'allVolumes.diskOfferingUuid', 'allVolumes.rootImageUuid', 'allVolumes.installPath', 'allVolumes.type', 'allVolumes.format', 'allVolumes.size', 'allVolumes.deviceId', 'allVolumes.state', 'allVolumes.status', 'allVolumes.createDate', 'allVolumes.lastOpDate'];
    ApiHeader.TagResourceTypeVirtualRouterVmVO = 'VirtualRouterVmVO';
    ApiHeader.VirtualRouterLoadBalancerRefInventoryQueryable = ['id', 'virtualRouterVmUuid', 'loadBalancerUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeVirtualRouterLoadBalancerRefVO = 'VirtualRouterLoadBalancerRefVO';
    ApiHeader.VirtualRouterVipInventoryQueryable = ['uuid', 'virtualRouterVmUuid'];
    ApiHeader.TagResourceTypeVirtualRouterVipVO = 'VirtualRouterVipVO';
    ApiHeader.VirtualRouterPortForwardingRuleRefInventoryQueryable = ['uuid', 'vipUuid', 'virtualRouterVmUuid'];
    ApiHeader.TagResourceTypeVirtualRouterPortForwardingRuleRefVO = 'VirtualRouterPortForwardingRuleRefVO';
    ApiHeader.PortForwardingRuleInventoryQueryable = ['uuid', 'name', 'description', 'vipIp', 'guestIp', 'vipUuid', 'vipPortStart', 'vipPortEnd', 'privatePortStart', 'privatePortEnd', 'vmNicUuid', 'protocolType', 'state', 'allowedCidr', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypePortForwardingRuleVO = 'PortForwardingRuleVO';
    ApiHeader.EipInventoryQueryable = ['uuid', 'name', 'description', 'vmNicUuid', 'vipUuid', 'createDate', 'lastOpDate', 'state', 'vipIp', 'guestIp'];
    ApiHeader.TagResourceTypeEipVO = 'EipVO';
    ApiHeader.LoadBalancerInventoryQueryable = ['name', 'uuid', 'description', 'state', 'vipUuid', 'listeners.uuid', 'listeners.name', 'listeners.description', 'listeners.loadBalancerUuid', 'listeners.instancePort', 'listeners.loadBalancerPort', 'listeners.protocol', 'listeners.createDate', 'listeners.lastOpDate', 'vmNicRefs.id', 'vmNicRefs.listenerUuid', 'vmNicRefs.vmNicUuid', 'vmNicRefs.status', 'vmNicRefs.createDate', 'vmNicRefs.lastOpDate'];
    ApiHeader.TagResourceTypeLoadBalancerVO = 'LoadBalancerVO';
    ApiHeader.LoadBalancerListenerVmNicRefInventoryQueryable = ['id', 'listenerUuid', 'vmNicUuid', 'status', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeLoadBalancerListenerVmNicRefVO = 'LoadBalancerListenerVmNicRefVO';
    ApiHeader.LoadBalancerListenerInventoryQueryable = ['uuid', 'name', 'description', 'loadBalancerUuid', 'instancePort', 'loadBalancerPort', 'protocol', 'createDate', 'lastOpDate', 'vmNicRefs.id', 'vmNicRefs.listenerUuid', 'vmNicRefs.vmNicUuid', 'vmNicRefs.status', 'vmNicRefs.createDate', 'vmNicRefs.lastOpDate'];
    ApiHeader.TagResourceTypeLoadBalancerListenerVO = 'LoadBalancerListenerVO';
    ApiHeader.VmNicSecurityGroupRefInventoryQueryable = ['vmNicUuid', 'securityGroupUuid', 'vmInstanceUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeVmNicSecurityGroupRefVO = 'VmNicSecurityGroupRefVO';
    ApiHeader.SecurityGroupRuleInventoryQueryable = ['uuid', 'securityGroupUuid', 'type', 'startPort', 'endPort', 'protocol', 'state', 'allowedCidr', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeSecurityGroupRuleVO = 'SecurityGroupRuleVO';
    ApiHeader.SecurityGroupInventoryQueryable = ['uuid', 'name', 'description', 'state', 'createDate', 'lastOpDate', 'rules.uuid', 'rules.securityGroupUuid', 'rules.type', 'rules.startPort', 'rules.endPort', 'rules.protocol', 'rules.state', 'rules.allowedCidr', 'rules.createDate', 'rules.lastOpDate', 'attachedL3NetworkUuids'];
    ApiHeader.TagResourceTypeSecurityGroupVO = 'SecurityGroupVO';
    ApiHeader.SecurityGroupL3NetworkRefInventoryQueryable = ['uuid', 'l3NetworkUuid', 'securityGroupUuid', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeSecurityGroupL3NetworkRefVO = 'SecurityGroupL3NetworkRefVO';
    ApiHeader.VipInventoryQueryable = ['uuid', 'name', 'description', 'l3NetworkUuid', 'ip', 'state', 'gateway', 'netmask', 'serviceProvider', 'peerL3NetworkUuid', 'useFor', 'createDate', 'lastOpDate'];
    ApiHeader.TagResourceTypeVipVO = 'VipVO';
    var APIExpungeVmInstanceMsg = (function () {
        function APIExpungeVmInstanceMsg() {
        }
        APIExpungeVmInstanceMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIExpungeVmInstanceMsg': this
            };
            return msg;
        };
        return APIExpungeVmInstanceMsg;
    }());
    ApiHeader.APIExpungeVmInstanceMsg = APIExpungeVmInstanceMsg;
    var APIExpungeVmInstanceEvent = (function () {
        function APIExpungeVmInstanceEvent() {
        }
        return APIExpungeVmInstanceEvent;
    }());
    ApiHeader.APIExpungeVmInstanceEvent = APIExpungeVmInstanceEvent;
    var APIRecoverVmInstanceMsg = (function () {
        function APIRecoverVmInstanceMsg() {
        }
        APIRecoverVmInstanceMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.vm.APIRecoverVmInstanceMsg': this
            };
            return msg;
        };
        return APIRecoverVmInstanceMsg;
    }());
    ApiHeader.APIRecoverVmInstanceMsg = APIRecoverVmInstanceMsg;
    var APIRecoverVmInstanceEvent = (function () {
        function APIRecoverVmInstanceEvent() {
        }
        return APIRecoverVmInstanceEvent;
    }());
    ApiHeader.APIRecoverVmInstanceEvent = APIRecoverVmInstanceEvent;
    var APIRecoverImageEvent = (function () {
        function APIRecoverImageEvent() {
        }
        return APIRecoverImageEvent;
    }());
    ApiHeader.APIRecoverImageEvent = APIRecoverImageEvent;
    var APIExpungeImageEvent = (function () {
        function APIExpungeImageEvent() {
        }
        return APIExpungeImageEvent;
    }());
    ApiHeader.APIExpungeImageEvent = APIExpungeImageEvent;
    var APIExpungeImageMsg = (function () {
        function APIExpungeImageMsg() {
        }
        APIExpungeImageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.image.APIExpungeImageMsg': this
            };
            return msg;
        };
        return APIExpungeImageMsg;
    }());
    ApiHeader.APIExpungeImageMsg = APIExpungeImageMsg;
    var APIRecoverImageMsg = (function () {
        function APIRecoverImageMsg() {
        }
        APIRecoverImageMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.image.APIRecoverImageMsg': this
            };
            return msg;
        };
        return APIRecoverImageMsg;
    }());
    ApiHeader.APIRecoverImageMsg = APIRecoverImageMsg;
    var APIExpungeDataVolumeEvent = (function () {
        function APIExpungeDataVolumeEvent() {
        }
        return APIExpungeDataVolumeEvent;
    }());
    ApiHeader.APIExpungeDataVolumeEvent = APIExpungeDataVolumeEvent;
    var APIRecoverDataVolumeEvent = (function () {
        function APIRecoverDataVolumeEvent() {
        }
        return APIRecoverDataVolumeEvent;
    }());
    ApiHeader.APIRecoverDataVolumeEvent = APIRecoverDataVolumeEvent;
    var APIExpungeDataVolumeMsg = (function () {
        function APIExpungeDataVolumeMsg() {
        }
        APIExpungeDataVolumeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APIExpungeDataVolumeMsg': this
            };
            return msg;
        };
        return APIExpungeDataVolumeMsg;
    }());
    ApiHeader.APIExpungeDataVolumeMsg = APIExpungeDataVolumeMsg;
    var APIRecoverDataVolumeMsg = (function () {
        function APIRecoverDataVolumeMsg() {
        }
        APIRecoverDataVolumeMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.volume.APIRecoverDataVolumeMsg': this
            };
            return msg;
        };
        return APIRecoverDataVolumeMsg;
    }());
    ApiHeader.APIRecoverDataVolumeMsg = APIRecoverDataVolumeMsg;
    var APIGetVersionMsg = (function () {
        function APIGetVersionMsg() {
        }
        APIGetVersionMsg.prototype.toApiMap = function () {
            var msg = {
                'org.zstack.header.managementnode.APIGetVersionMsg': this
            };
            return msg;
        };
        return APIGetVersionMsg;
    }());
    ApiHeader.APIGetVersionMsg = APIGetVersionMsg;
    var APIGetVersionMsgEvent = (function () {
        function APIGetVersionMsgEvent() {
        }
        return APIGetVersionMsgEvent;
    }());
    ApiHeader.APIGetVersionMsgEvent = APIGetVersionMsgEvent;
})(ApiHeader || (ApiHeader = {}));
/// <reference path="d.ts/angularjs/angular.d.ts" />
var Utils;
(function (Utils) {
    var Receipt = (function () {
        function Receipt() {
        }
        return Receipt;
    }());
    var Tag = (function () {
        function Tag(api) {
            this.api = api;
        }
        Tag.prototype.createTag = function (tag, resourceUuid, resourceType, done) {
            var msg = new ApiHeader.APICreateUserTagMsg();
            msg.resourceType = resourceType;
            msg.resourceUuid = resourceUuid;
            msg.tag = tag;
            this.api.asyncApi(msg, function (ret) {
                if (Utils.notNullnotUndefined(done)) {
                    done(ret.inventory);
                }
            });
        };
        Tag.prototype.deleteTag = function (uuid, done) {
            if (done === void 0) { done = null; }
            var msg = new ApiHeader.APIDeleteTagMsg();
            msg.uuid = uuid;
            this.api.asyncApi(msg, function (ret) {
                if (Utils.notNullnotUndefined(done)) {
                    done();
                }
            });
        };
        Tag.prototype.queryTag = function (resourceUuid, done) {
            var msg = new ApiHeader.APIQueryUserTagMsg();
            msg.conditions = [{ name: 'resourceUuid', op: '=', value: resourceUuid }];
            this.api.syncApi(msg, function (ret) {
                done(ret.inventories);
            });
        };
        return Tag;
    }());
    Utils.Tag = Tag;
    var Api = (function () {
        function Api($http, $rootScope, $location) {
            //this.debugLogIn();
            var _this = this;
            this.$http = $http;
            this.$rootScope = $rootScope;
            this.$location = $location;
            this.$inject = ['$http', '$rootScope', '$location'];
            this.beforeCallListeners = [];
            this.afterCallListeners = [];
            this.errorCallListeners = [];
            $rootScope.$watch(function () {
                return $rootScope.user;
            }, function () {
                if (Utils.notNullnotUndefined($rootScope.user)) {
                    _this.session = new ApiHeader.SessionInventory();
                    _this.session.uuid = $rootScope.user.sessionUuid;
                }
            });
        }
        Api.prototype.debugLogIn = function (done) {
            var _this = this;
            if (done === void 0) { done = null; }
            var msg = new ApiHeader.APILogInByAccountMsg();
            msg.accountName = 'admin';
            msg.password = 'b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86';
            this.syncCall(msg, function (ret) {
                _this.session = new ApiHeader.SessionInventory();
                _this.session.uuid = ret.inventory.uuid;
                console.log(JSON.stringify(_this.session));
                if (Utils.notNullnotUndefined(done)) {
                    done();
                }
            });
        };
        Api.prototype.getHypervisorTypes = function (done) {
            var msg = new ApiHeader.APIGetHypervisorTypesMsg();
            this.syncApi(msg, function (ret) {
                done(ret.hypervisorTypes);
            });
        };
        Api.prototype.getVolumeFormats = function (done) {
            var msg = new ApiHeader.APIGetVolumeFormatMsg();
            this.syncApi(msg, function (ret) {
                done(ret.formats);
            });
        };
        Api.prototype.getPrimaryStorageTypes = function (done) {
            var msg = new ApiHeader.APIGetPrimaryStorageTypesMsg();
            this.syncApi(msg, function (ret) {
                done(ret.primaryStorageTypes);
            });
        };
        Api.prototype.getL2NetworkTypes = function (done) {
            var msg = new ApiHeader.APIGetL2NetworkTypesMsg();
            this.syncApi(msg, function (ret) {
                done(ret.l2NetworkTypes);
            });
        };
        Api.prototype.getL3NetworkTypes = function (done) {
            var msg = new ApiHeader.APIGetL3NetworkTypesMsg();
            this.syncApi(msg, function (ret) {
                done(ret.l3NetworkTypes);
            });
        };
        Api.prototype.getBackupStorageTypes = function (done) {
            var msg = new ApiHeader.APIGetBackupStorageTypesMsg();
            this.syncApi(msg, function (ret) {
                done(ret.backupStorageTypes);
            });
        };
        Api.prototype.getInstanceOfferingAllocatorStrategies = function (done) {
            var msg = new ApiHeader.APIGetHostAllocatorStrategiesMsg();
            this.syncApi(msg, function (ret) {
                done(ret.hostAllocatorStrategies);
            });
        };
        Api.prototype.getDiskOfferingAllocatorStrategies = function (done) {
            var msg = new ApiHeader.APIGetPrimaryStorageAllocatorStrategiesMsg();
            this.syncApi(msg, function (ret) {
                done(ret.primaryStorageAllocatorStrategies);
            });
        };
        Api.prototype.getVmMigrationCandidateHosts = function (vmUuid, done) {
            var msg = new ApiHeader.APIGetVmMigrationCandidateHostsMsg();
            msg.vmInstanceUuid = vmUuid;
            this.syncApi(msg, function (ret) {
                done(ret.inventories);
            });
        };
        Api.prototype.getDataVolumeAttachableVm = function (volUuid, done) {
            var msg = new ApiHeader.APIGetDataVolumeAttachableVmMsg();
            msg.volumeUuid = volUuid;
            this.syncApi(msg, function (ret) {
                done(ret.inventories);
            });
        };
        Api.prototype.getVmAttachableL3Networks = function (vmUuid, done) {
            var msg = new ApiHeader.APIGetVmAttachableL3NetworkMsg();
            msg.vmInstanceUuid = vmUuid;
            this.syncApi(msg, function (ret) {
                done(ret.inventories);
            });
        };
        Api.prototype.getVmAttachableVolume = function (vmUuid, done) {
            var msg = new ApiHeader.APIGetVmAttachableDataVolumeMsg();
            msg.vmInstanceUuid = vmUuid;
            this.syncApi(msg, function (ret) {
                done(ret.inventories);
            });
        };
        Api.prototype.getMemoryCpuCapacity = function (zoneUuids, clusterUuids, hostUuids, done) {
            var msg = new ApiHeader.APIGetCpuMemoryCapacityMsg();
            msg.zoneUuids = zoneUuids;
            msg.clusterUuids = clusterUuids;
            msg.hostUuids = hostUuids;
            this.syncApi(msg, function (ret) {
                done(ret);
            });
        };
        Api.prototype.getMemoryCpuCapacityByAll = function (done) {
            var msg = new ApiHeader.APIGetCpuMemoryCapacityMsg();
            msg.all = true;
            this.syncApi(msg, function (ret) {
                done(ret);
            });
        };
        Api.prototype.getPirmaryStorageCapacityByAll = function (done) {
            var msg = new ApiHeader.APIGetPrimaryStorageCapacityMsg();
            msg.all = true;
            this.syncApi(msg, function (ret) {
                done(ret);
            });
        };
        Api.prototype.getBackupStorageCapacityByAll = function (done) {
            var msg = new ApiHeader.APIGetBackupStorageCapacityMsg();
            msg.all = true;
            this.syncApi(msg, function (ret) {
                done(ret);
            });
        };
        Api.prototype.getIpAddressCapacityByAll = function (done) {
            var msg = new ApiHeader.APIGetIpAddressCapacityMsg();
            msg.all = true;
            this.syncApi(msg, function (ret) {
                done(ret);
            });
        };
        Api.prototype.getSystemTags = function (resourceType, resourceUuid, done) {
            var msg = new ApiHeader.APIQuerySystemTagMsg();
            msg.conditions = [{
                    name: 'resourceType',
                    op: '=',
                    value: resourceType
                }, {
                    name: 'resourceUuid',
                    op: '=',
                    value: resourceUuid
                }];
            this.syncApi(msg, function (ret) {
                done(ret.inventories);
            });
        };
        Api.prototype.fireAfterListener = function (recepit) {
            angular.forEach(this.afterCallListeners, function (item) {
                item(recepit.request, recepit.rsp);
            });
        };
        Api.prototype.poll = function (receipt, callback, error) {
            var _this = this;
            if (receipt.status == Api.STATUS_DONE) {
                console.log(JSON.stringify(receipt.rsp));
                this.fireAfterListener(receipt);
                var rsp = Utils.firstItem(receipt.rsp);
                if (rsp.success) {
                    callback(rsp);
                }
                else {
                    if (Utils.notNullnotUndefined(error)) {
                        error(rsp);
                    }
                }
                return;
            }
            this.$http.post(Api.QUERY_PATH, receipt.id)
                .success(function (re) {
                re.request = receipt.request;
                if (re.status == Api.STATUS_DONE) {
                    console.log(JSON.stringify(re.rsp));
                    _this.fireAfterListener(re);
                    var rsp = Utils.firstItem(re.rsp);
                    if (rsp.success) {
                        callback(rsp);
                    }
                    else {
                        if (Utils.notNullnotUndefined(error)) {
                            error(rsp);
                        }
                    }
                    return;
                }
                //TODO: configurable
                setTimeout(function () {
                    Utils.safeApply(_this.$rootScope, function () {
                        _this.poll(re, callback, error);
                    });
                }, 1000);
            }).error(function (reason, status) {
                if (error) {
                    error(reason, status);
                }
                _this.fireErrorListener({
                    request: receipt.request,
                    data: reason,
                    status: status
                });
            });
        };
        Api.prototype.fireErrorListener = function (reason) {
            angular.forEach(this.errorCallListeners, function (item) {
                item(reason);
            });
        };
        Api.prototype.asyncCall = function (msg, callback, error) {
            var _this = this;
            msg.session = this.session;
            angular.forEach(this.beforeCallListeners, function (item) {
                item(msg);
            });
            this.$http.post(Api.ASYNC_CALL_PATH, msg.toApiMap())
                .success(function (receipt) {
                receipt.request = msg;
                _this.poll(receipt, callback, error);
            }).error(function (reason, status) {
                if (error) {
                    error(reason, status);
                }
                _this.fireErrorListener({
                    request: msg,
                    data: reason,
                    status: status
                });
            });
        };
        Api.prototype.syncCall = function (msg, callback, error) {
            var _this = this;
            msg.session = this.session;
            console.log(JSON.stringify(msg));
            this.$http.post(Api.SYNC_CALL_PATH, msg.toApiMap()).success(function (rsp) {
                var ret = Utils.firstItem(rsp);
                if (!ret.success && notNullnotUndefined(ret.error) && ret.error.code == 'ID.1001') {
                    console.log('authentication error');
                    _this.$location.path('/login');
                    return;
                }
                callback(Utils.firstItem(rsp));
            }).error(function (reason, status) {
                if (error) {
                    error(reason, status);
                }
                _this.fireErrorListener({
                    request: msg,
                    data: reason,
                    status: status
                });
            });
        };
        Api.prototype.testLoginSyncCall = function (msg, callback, error) {
            var _this = this;
            msg.session = this.session;
            console.log(JSON.stringify(msg));
            this.$http.post("http://127.0.0.1:8080/discloud/login", msg.toApiMap()).success(function (rsp) {
                var ret = Utils.firstItem(rsp);
                if (!ret.success && notNullnotUndefined(ret.error) && ret.error.code == 'ID.1001') {
                    console.log('authentication error');
                    _this.$location.path('/login');
                    return;
                }
                callback(Utils.firstItem(rsp));
            }).error(function (reason, status) {
                if (error) {
                    error(reason, status);
                }
                _this.fireErrorListener({
                    request: msg,
                    data: reason,
                    status: status
                });
            });
        };
        
        Api.prototype.testLogin = function (data, callback, error) {
            if (error === void 0) { error = undefined; }
            
            if (Utils.notNullnotUndefined(this.$rootScope.sessionUuid)) {
                this.session = new ApiHeader.SessionInventory();
                this.session.uuid = this.$rootScope.sessionUuid;
            }
            this.testLoginSyncCall(data, callback, error);
        };




        Api.prototype.syncApi = function (data, callback, error) {
            if (error === void 0) { error = undefined; }
            
            if (Utils.notNullnotUndefined(this.$rootScope.sessionUuid)) {
                this.session = new ApiHeader.SessionInventory();
                this.session.uuid = this.$rootScope.sessionUuid;
            }
            this.syncCall(data, callback, error);
        };
        Api.prototype.asyncApi = function (data, callback, error) {
            if (error === void 0) { error = undefined; }
             
            if (Utils.notNullnotUndefined(this.$rootScope.sessionUuid)) {
                this.session = new ApiHeader.SessionInventory();
                this.session.uuid = this.$rootScope.sessionUuid;
            }
            this.asyncCall(data, callback, error);
        };
        Api.prototype.installListener = function (before, after, error) {
            if (before === void 0) { before = null; }
            if (after === void 0) { after = null; }
            if (error === void 0) { error = null; }
            if (notNullnotUndefined(before)) {
                this.beforeCallListeners.push(before);
            }
            if (notNullnotUndefined(after)) {
                this.afterCallListeners.push(after);
            }
            if (notNullnotUndefined(error)) {
                this.errorCallListeners.push(error);
            }
        };
        return Api;
    }());
    Api.ASYNC_CALL_PATH = "/api/async";
    Api.SYNC_CALL_PATH = "/api/sync";
    Api.QUERY_PATH = "/api/query";
    Api.STATUS_DONE = 2;
    Api.STATUS_PROCESSING = 1;
    Utils.Api = Api;
    var Chain = (function () {
        function Chain() {
            this.flows = [];
        }
        Chain.prototype.done = function (handler) {
            this.doneHandler = handler;
            return this;
        };
        Chain.prototype.error = function (handler) {
            this.errorHandler = handler;
            return this;
        };
        Chain.prototype.then = function (flow) {
            this.flows.push(flow);
            return this;
        };
        Chain.prototype.next = function () {
            var func = this.flows.shift();
            if (func) {
                func(this);
            }
            else {
                if (Utils.notNullnotUndefined(this.doneHandler)) {
                    this.doneHandler();
                }
            }
        };
        Chain.prototype.fail = function (reason) {
            if (this.errorHandler) {
                this.errorHandler(reason);
            }
        };
        Chain.prototype.start = function () {
            this.next();
        };
        return Chain;
    }());
    Utils.Chain = Chain;
    function periodicalRun(func, interval) {
        var cb = function () {
            if (func()) {
                return;
            }
            setTimeout(cb, interval);
        };
        cb();
    }
    Utils.periodicalRun = periodicalRun;
    function notNullnotUndefined(arg) {
        return angular.isDefined(arg) && arg != null;
    }
    Utils.notNullnotUndefined = notNullnotUndefined;
    function notNullnotUndefinedNotEmptyString(arg) {
        return notNullnotUndefined(arg) && arg != "";
    }
    Utils.notNullnotUndefinedNotEmptyString = notNullnotUndefinedNotEmptyString;
    function firstItem(obj) {
        return obj[Object.keys(obj)[0]];
    }
    Utils.firstItem = firstItem;
    function isEmptyObject(obj) {
        if (!notNullnotUndefined(obj)) {
            return true;
        }
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    Utils.isEmptyObject = isEmptyObject;
    function arrayRemoveIndex(arr, index) {
        if (index != -1) {
            arr.splice(index, 1);
        }
    }
    Utils.arrayRemoveIndex = arrayRemoveIndex;
    function safeApply(scope, func) {
        if (!scope.$$phase) {
            scope.$apply(function () {
                func();
            });
        }
        else {
            func();
        }
    }
    Utils.safeApply = safeApply;
    function addCommas(str) {
        return (str + "").replace(/\b(\d+)((\.\d+)*)\b/g, function (a, b, c) {
            return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
        });
    }
    Utils.addCommas = addCommas;
    function isValidSizeStr(str) {
        if (angular.isNumber(str)) {
            return true;
        }
        var cpattern = /^[PpTtGgMmKk]$/;
        var npattern = /^[0-9]$/;
        var last = str.slice(-1);
        if (cpattern.test(last)) {
            var size = str.substring(0, str.length - 1);
            return !isNaN(size);
        }
        else if (npattern.test(last)) {
            return !isNaN(str);
        }
        else {
            return false;
        }
    }
    Utils.isValidSizeStr = isValidSizeStr;
    function stringContains(str, tofind) {
        return str.indexOf(tofind) > -1;
    }
    Utils.stringContains = stringContains;
    function isIpv4Address(ip) {
        var pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return pattern.test(ip);
    }
    Utils.isIpv4Address = isIpv4Address;
    function isCharacter(c) {
        var pattern = /^[a-z]$/;
        return pattern.test(c);
    }
    Utils.isCharacter = isCharacter;
    function isValidPort(port) {
        if (isNaN(port)) {
            return false;
        }
        var sport = parseInt(port);
        return sport >= 0 && sport <= 65535;
    }
    Utils.isValidPort = isValidPort;
    function isValidCidr(cidr) {
        var pairs = cidr.split("/");
        if (pairs.length != 2) {
            return false;
        }
        var ip = pairs[0];
        if (!Utils.isIpv4Address(ip)) {
            return false;
        }
        var cidrStr = pairs[1];
        if (isNaN(cidrStr)) {
            return false;
        }
        cidr = parseInt(cidrStr);
        return cidr >= 0 && cidr <= 32;
    }
    Utils.isValidCidr = isValidCidr;
    function shortHashName(prefix) {
        return prefix + '-' + ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).substr(-4);
    }
    Utils.shortHashName = shortHashName;
    function uuid() {
        var dec2hex = [];
        for (var i = 0; i <= 15; i++) {
            dec2hex[i] = i.toString(16);
        }
        return function () {
            var uuid = '';
            for (var i = 1; i <= 36; i++) {
                if (i === 9 || i === 14 || i === 19 || i === 24) {
                    continue;
                }
                else if (i === 15) {
                    uuid += 4;
                }
                else if (i === 20) {
                    uuid += dec2hex[(Math.random() * 4 | 0 + 8)];
                }
                else {
                    uuid += dec2hex[(Math.random() * 15 | 0)];
                }
            }
            return uuid;
        }();
    }
    Utils.uuid = uuid;
    function sprintf(fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return fmt.replace(/{(\d+)}/g, function (match, index) {
            return typeof args[index] != 'undefined'
                ? args[index]
                : "";
        });
    }
    Utils.sprintf = sprintf;
    var K = 1024;
    var M = K * K;
    var G = M * K;
    var T = G * K;
    var P = T * K;
    var sizeMap = {
        'K': K,
        'M': M,
        'G': G,
        'T': T,
        'P': P
    };
    function parseSize(sizeStr) {
        var quantity = sizeStr.substr(sizeStr.length - 1, 1);
        var size = parseInt(sizeStr);
        if (quantity == 'K' || quantity == 'k') {
            return size * K;
        }
        else if (quantity == 'M' || quantity == 'm') {
            return size * M;
        }
        else if (quantity == 'G' || quantity == 'g') {
            return size * G;
        }
        else if (quantity == 'T' || quantity == 't') {
            return size * T;
        }
        else if (quantity == 'P' || quantity == 'p') {
            return size * P;
        }
        else {
            return parseInt(sizeStr);
        }
    }
    Utils.parseSize = parseSize;
    function sizeRoundToString(size) {
        var suffixes = ['P', 'T', 'G', 'M', 'K'];
        function round() {
            var s = suffixes.shift();
            if (!notNullnotUndefined(size)) {
                return sprintf('{0} Bytes', size);
            }
            var q = sizeMap[s];
            var ret = size / q;
            if (ret >= 1) {
                return sprintf('{0} {1}', ret.toFixed(2), s);
            }
            else {
                return round();
            }
        }
        return round();
    }
    Utils.sizeRoundToString = sizeRoundToString;
    function toFixed(num, precision) {
        var multiplier = Math.pow(10, precision + 1), wholeNumber = Math.floor(num * multiplier);
        return Math.round(wholeNumber / 10) * 10 / multiplier;
    }
    Utils.toFixed = toFixed;
    function toSizeString(input) {
        try {
            return Utils.sizeRoundToString(parseInt(input));
        }
        catch (e) {
            return input;
        }
    }
    Utils.toSizeString = toSizeString;
    function toVCPUString(input) {
        return input + ' vCPUs';
    }
    Utils.toVCPUString = toVCPUString;
    function toPercentageString(input) {
        var per = parseFloat(input) * 100;
        var perStr = per.toString();
        if (perStr.length > 5) {
            perStr = perStr.slice(0, 5);
        }
        return Utils.sprintf('{0}%', perStr);
    }
    Utils.toPercentageString = toPercentageString;
    function commaString(input) {
        return Utils.addCommas(input.toString());
    }
    Utils.commaString = commaString;
    var Translator = (function () {
        function Translator($filter) {
            this.$filter = $filter;
        }
        Translator.prototype.addProperty = function (object, key, resourceId) {
            var _this = this;
            Object.defineProperty(object, key, {
                get: function () { return _this.$filter('translate')(resourceId); }
            });
        };
        return Translator;
    }());
    Utils.Translator = Translator;
    var Model = (function () {
        function Model() {
            this.multiSelection = false;
        }
        Model.prototype.resetCurrent = function () {
            this.current = null;
        };
        return Model;
    }());
    Utils.Model = Model;
    var OGrid = (function () {
        function OGrid() {
        }
        OGrid.prototype.setFilter = function (filter) {
            this.grid.dataSource.filter(filter);
        };
        OGrid.prototype.select = function (item) {
            var _this = this;
            var selected = null;
            if (Utils.notNullnotUndefined(item)) {
                selected = item;
            }
            else {
                selected = this.grid.dataSource.data()[0];
            }
            if (selected) {
                if (this.$scope.model.mutliSelection) {
                    selected.forEach(function (m) {
                        var row = _this.grid.table.find('tr[data-uid="' + m.uid + '"]');
                        _this.grid.select(row);
                    });
                }
                else {
                    var row = this.grid.table.find('tr[data-uid="' + selected.uid + '"]');
                    this.grid.select(row);
                }
            }
        };
        OGrid.prototype.refresh = function (data) {
            if (data === void 0) { data = null; }
            if (Utils.notNullnotUndefined(data)) {
                this.grid.dataSource.data(data);
            }
            else {
                this.grid.dataSource.read();
                this.$scope.model.resetCurrent();
            }
        };
        OGrid.prototype.add = function (ps) {
            this.grid.dataSource.insert(0, ps);
        };
        OGrid.prototype.deleteCurrent = function () {
            var _this = this;
            if (this.$scope.model.multiSelection) {
                this.$scope.model.current.forEach(function (m) {
                    var row = _this.grid.dataSource.getByUid(m.uid);
                    _this.grid.dataSource.remove(row);
                });
            }
            else {
                var row = this.grid.dataSource.getByUid(this.$scope.model.current.uid);
                this.grid.dataSource.remove(row);
            }
            this.$scope.model.resetCurrent();
        };
        OGrid.prototype.init = function ($scope, grid) {
            var _this = this;
            this.$scope = $scope;
            this.grid = grid;
            var model = this.$scope.model;
            this.options = {
                resizable: true,
                scrollable: true,
                selectable: true,
                pageable: true,
                dataBound: function (e) {
                    _this.grid = e.sender;
                    if (_this.grid.dataSource.totalPages() <= 1) {
                        _this.grid.pager.element.hide();
                    }
                    if (Utils.notNullnotUndefined(model.current)) {
                        _this.select(model.current);
                    }
                },
                change: function (e) {
                    var selected = _this.grid.select();
                    if (model.multiSelection) {
                        Utils.safeApply($scope, function () {
                            if (!model.current)
                                model.current = [];
                            var idx = model.current.indexOf(_this.grid.dataItem(selected));
                            if (idx < 0)
                                model.current.push(_this.grid.dataItem(selected));
                            else
                                model.current.splice(idx, 1);
                        });
                    }
                    else {
                        Utils.safeApply($scope, function () {
                            model.current = _this.grid.dataItem(selected);
                        });
                    }
                },
                dataSource: new kendo.data.DataSource({
                    serverPaging: true,
                    pageSize: 20,
                    schema: {
                        data: 'data',
                        total: 'total'
                    },
                    transport: {}
                })
            };
        };
        return OGrid;
    }());
    Utils.OGrid = OGrid;
    var WizardButton = (function () {
        function WizardButton(pages, mediator) {
            this.pages = pages;
            this.mediator = mediator;
            this.currentIndex = 0;
        }
        WizardButton.prototype.reset = function () {
            this.currentIndex = 0;
            var fpage = this.pages[0];
            angular.forEach(this.pages, function (page) {
                page.reset();
                if (page != fpage) {
                    var el = page.getAnchorElement();
                    el.removeAttr('data-toggle');
                }
            });
            this.showPage(fpage);
        };
        WizardButton.prototype.canPreviousProceed = function () {
            if (this.currentIndex == 0) {
                return false;
            }
            else {
                var page = this.pages[this.currentIndex];
                return page.canMoveToPrevious();
            }
        };
        WizardButton.prototype.canNextProceed = function () {
            var page = this.pages[this.currentIndex];
            return page.canMoveToNext();
        };
        WizardButton.prototype.isLastPage = function () {
            return this.currentIndex == this.pages.length - 1;
        };
        WizardButton.prototype.showPage = function (page) {
            page.active();
            page.show();
            var el = page.getAnchorElement();
            if (!Utils.notNullnotUndefined(el.attr('data-toggle'))) {
                el.attr('data-toggle', 'tab');
            }
        };
        WizardButton.prototype.previousClick = function () {
            this.currentIndex--;
            var page = this.pages[this.currentIndex];
            this.mediator.movedToPage(page);
            this.showPage(page);
        };
        WizardButton.prototype.nextClick = function () {
            var _this = this;
            if (this.isLastPage()) {
                this.mediator.finish();
                return;
            }
            this.currentIndex++;
            var page = this.pages[this.currentIndex];
            if (Utils.notNullnotUndefined(page.beforeMoveToNext)) {
                page.beforeMoveToNext(function () {
                    _this.mediator.movedToPage(page);
                    _this.showPage(page);
                });
            }
            else {
                this.mediator.movedToPage(page);
                this.showPage(page);
            }
        };
        WizardButton.prototype.nextButtonName = function () {
            if (this.isLastPage()) {
                return this.mediator.finishButtonName();
            }
            else {
                return 'Next';
            }
        };
        WizardButton.prototype.pageClick = function (pageName) {
            for (var i = 0; i < this.pages.length; i++) {
                var page = this.pages[i];
                if (pageName == page.getPageName() && page.isActive()) {
                    page.show();
                    this.currentIndex = i;
                }
            }
        };
        return WizardButton;
    }());
    Utils.WizardButton = WizardButton;
})(Utils || (Utils = {}));
angular.module("app.service", []).factory('Api', ['$http', '$rootScope', '$location', function ($http, $rootScope, $location) {
        return new Utils.Api($http, $rootScope, $location);
    }]).factory('Tag', ['Api', function (api) {
        return new Utils.Tag(api);
    }]).factory('Translator', ['$filter', function ($filter) {
        return new Utils.Translator($filter);
    }]);
/// <reference path="d.ts/angularjs/angular.d.ts" />
/// <reference path="d.ts/kendo.all.d.ts" />
/// <reference path="d.ts/zstack.d.ts" />
var MRoot;
(function (MRoot) {
    var Events = (function () {
        function Events() {
        }
        return Events;
    }());
    Events.NOTIFICATION = "root.notification";
    MRoot.Events = Events;
    var ChangePasswordModel = (function () {
        function ChangePasswordModel() {
        }
        ChangePasswordModel.prototype.canChange = function () {
            return angular.equals(this.password, this.repeatPassword) && angular.isDefined(this.password);
        };
        return ChangePasswordModel;
    }());
    MRoot.ChangePasswordModel = ChangePasswordModel;
    var main = (function () {
        function main($scope, $rootScope, api, apiDetails, $location, $cookies, $translate) {
            var _this = this;
            this.$scope = $scope;
            this.$rootScope = $rootScope;
            this.api = api;
            this.apiDetails = apiDetails;
            this.$location = $location;
            this.$cookies = $cookies;
            this.$translate = $translate;
            if (Utils.notNullnotUndefined($cookies.sessionUuid)) {
                var msg = new ApiHeader.APIValidateSessionMsg();
                msg.sessionUuid = $cookies.sessionUuid;
                this.api.syncApi(msg, function (ret) {
                    if (ret.success && ret.validSession) {
                        $rootScope.sessionUuid = $cookies.sessionUuid;
                        $rootScope.loginFlag = true;
                        $location.path("/dashboard");
                    }
                    else {
                        $rootScope.loginFlag = false;
                    }
                });
            }
            $rootScope.instanceConsoles = {};
            $scope.optionsNotification = {
                position: {
                    pinned: true,
                    top: null,
                    left: 20,
                    bottom: 20,
                    right: null
                },
                width: 300,
                templates: [
                    {
                        type: 'success',
                        template: $('#successNotification').html()
                    },
                    {
                        type: 'error',
                        template: $('#errorNotification').html()
                    }
                ]
            };
            $scope.$on(Events.NOTIFICATION, function (e, msg) {
                var type = msg.type;
                if (!Utils.notNullnotUndefined(type)) {
                    type = "success";
                }
                $scope.apiNotification.show(msg, type);
            });
            $rootScope.loginFlag = false;
            $scope.isLogin = function () {
                return $rootScope.loginFlag;
            };
            $scope.$watch(function () {
                return $rootScope.loginFlag;
            }, function () {
                if (!$rootScope.loginFlag) {
                    $location.path("/login");
                }
            });
            $scope.canLogin = function () {
                return Utils.notNullnotUndefined($scope.username) && Utils.notNullnotUndefined($scope.password);
            };
            $scope.getAccountName = function () {
                return $cookies.accountName;
            };
            $scope.getAccountUuid = function () {
                return $cookies.accountUuid;
            };
            $scope.getUserUuid = function () {
                return $cookies.userUuid;
            };
            $scope.changePassword = function (win) {
                $scope.modelChangePassword = new ChangePasswordModel();
                win.center();
                win.open();
            };
            $scope.funcChangePasswordDone = function (win) {
                var msg = new ApiHeader.APIUpdateAccountMsg();
                msg.uuid = $cookies.accountUuid;
                msg.password = CryptoJS.SHA512($scope.modelChangePassword.password).toString();
                _this.api.syncApi(msg, function (ret) {
                    $rootScope.$broadcast(MRoot.Events.NOTIFICATION, {
                        msg: Utils.sprintf('Changed password: {0}', $cookies.accountName)
                    });
                });
                win.close();
            };
            $scope.funcChangePasswordCancel = function (win) {
                win.close();
            };
            $scope.logout = function () {
                var msg = new ApiHeader.APILogOutMsg();
                msg.sessionUuid = $cookies.sessionUuid;
                _this.api.syncApi(msg, function (ret) {
                    $rootScope.loginFlag = false;
                    $rootScope.sessionUuid = null;
                    $cookies.sessionUuid = null;
                    $scope.username = null;
                    $scope.password = null;
                    $location.path("/login");
                    $scope.logInError = false;
                });
            };
            $scope.logInError = false;
            $scope.login = function () {
                var msg = new ApiHeader.APILogInByAccountMsg();
                msg.accountName = $scope.username;
                msg.password = CryptoJS.SHA512($scope.password).toString();
                _this.api.testLogin(msg, function (ret) {
                    if (ret.success) {
                        $rootScope.loginFlag = true;
                        $rootScope.sessionUuid = ret.inventory.uuid;
                        $cookies.sessionUuid = ret.inventory.uuid;
                        $cookies.accountName = $scope.username;
                        $cookies.accountUuid = ret.inventory.accountUuid;
                        $cookies.userUuid = ret.inventory.userUuid;
                        $scope.username = null;
                        $scope.password = null;
                        $location.path("/index");
                        $scope.logInError = false;
                    }
                    else {
                        $scope.logInError = true;
                    }
                });
               /* _this.api.syncApi(msg, function (ret) {
                    if (ret.success) {
                        $rootScope.loginFlag = true;
                        $rootScope.sessionUuid = ret.inventory.uuid;
                        $cookies.sessionUuid = ret.inventory.uuid;
                        $cookies.accountName = $scope.username;
                        $cookies.accountUuid = ret.inventory.accountUuid;
                        $cookies.userUuid = ret.inventory.userUuid;
                        $scope.username = null;
                        $scope.password = null;
                        $location.path("/index");
                        $scope.logInError = false;
                    }
                    else {
                        $scope.logInError = true;
                    }
                });
*/





            };
            $scope.changeLanguage = function (language) {
                switch (language) {
                    case 'English':
                        $translate.use('en_US');
                        break;
                    case 'Chinese (Simplified)':
                        $translate.use('zh_CN');
                        break;
                    case 'Chinese (Traditional)':
                        $translate.use('zh_TW');
                        break;
                }
            };
        }
        return main;
    }());
    main.$inject = ['$scope', '$rootScope', 'Api', 'ApiDetails', '$location', '$cookies', '$translate'];
    MRoot.main = main;
})(MRoot || (MRoot = {}));
var ApiHeader;
(function (ApiHeader) {
    var QueryObject = (function () {
        function QueryObject() {
            this.start = null;
            this.limit = null;
            this.count = false;
            this.conditions = null;
        }
        QueryObject.prototype.addCondition = function (cond) {
            if (!Utils.notNullnotUndefined(this.conditions)) {
                this.conditions = [];
            }
            this.conditions.push(cond);
        };
        return QueryObject;
    }());
    ApiHeader.QueryObject = QueryObject;
})(ApiHeader || (ApiHeader = {}));
angular.module("root", ['app.service', 'kendo.directives', 'ngRoute', 'ngTagsInput', 'ngCookies', 'pascalprecht.translate'])
    .config(['$routeProvider', function (route) {
        route.when('/login', {
            templateUrl: '/static/templates/login.html',
            controller: 'MRoot.main'
        }).otherwise({
            redirectTo: '/index'
        });
    }])
    .constant('LOCALES', {
    'locales': {
        'zh_CN': '简体中文',
        'zh_TW': '繁体中文',
        'en_US': 'English'
    },
    'preferredLocale': 'en_US'
})
    .config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: '/static/resources/locale-',
        suffix: '.json' // suffix, currently- extension of the translations  
    });
    $translateProvider.preferredLanguage('en_US'); // is applied on first load
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.useCookieStorage();
});
/// <reference path="d.ts/angularjs/angular.d.ts" />
/// <reference path="d.ts/kendo.all.d.ts" />
var Controller;
(function (Controller) {
    var SideBar = (function () {
        function SideBar($scope) {
            $scope.dataSource = new kendo.data.HierarchicalDataSource({
                data: [
                    {
                        text: "Compute",
                        url: "#",
                        items: [
                            {
                                text: "Instance",
                                url: "#"
                            },
                            {
                                text: "Host",
                                url: "#"
                            },
                            {
                                text: "Cluster",
                                url: "/#/cluster"
                            },
                            {
                                text: "Zone",
                                url: "/#/zone"
                            },
                        ]
                    },
                    {
                        text: "Storage",
                        url: "#"
                    },
                    {
                        text: "Network",
                        url: "#",
                        items: [
                            {
                                text: "L2 Network",
                                url: "#"
                            },
                            {
                                text: "L3 Network",
                                url: "#"
                            },
                            {
                                text: "Network Service",
                                url: "#",
                                items: [
                                    {
                                        text: "Security Group",
                                        url: "#"
                                    },
                                    {
                                        text: "EIP",
                                        url: "#"
                                    },
                                    {
                                        text: "Port Forwarding",
                                        url: "#"
                                    },
                                    {
                                        text: "VIP",
                                        url: "#"
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        text: "Configuration",
                        url: "#"
                    }
                ]
            });
            /*
            $scope.barOptions = {
                dataSource : new kendo.data.HierarchicalDataSource({
                    data:[
                        {
                            text: "Compute",
                            items: [
                                {text: "Instance"},
                                {text: "Host"},
                                {text: "Cluster"},
                                {text: "Zone"},
                            ]
                        },
                        {
                            text: "Storage"
                        },
                        {
                            text: "Network"
                        },
                        {
                            text: "Configuration"
                        }
                    ]
                })
            };
            */
        }
        return SideBar;
    }());
    Controller.SideBar = SideBar;
})(Controller || (Controller = {}));
/// <reference path="d.ts/angularjs/angular.d.ts" />
/// <reference path="d.ts/kendo.all.d.ts" />
var MNav;
(function (MNav) {
    var Controller = (function () {
        function Controller($scope, api) {
            var _this = this;
            this.$scope = $scope;
            this.api = api;
            this.pendingRequestNum = 0;
            this.zstackVersion = '';
            api.installListener(function (msg) {
                _this.pendingRequestNum++;
            }, function (msg, ret) {
                _this.decrease();
            }, function (msg, reason) {
                _this.decrease();
            });
            $scope.funcIsProcessing = function () {
                return _this.pendingRequestNum > 0;
            };
            $scope.funcPendingRequestNum = function () {
                return _this.pendingRequestNum;
            };
            $scope.getZStackVersion = function () {
                return _this.zstackVersion;
            };
            $scope.$watch(function () {
                return _this.zstackVersion;
            }, function () {
                if (_this.zstackVersion == '') {
                    var msgVerSion = new ApiHeader.APIGetVersionMsg();
                    _this.api.syncApi(msgVerSion, function (ret) {
                        _this.zstackVersion = ret.version;
                    });
                }
            });
        }
        Controller.prototype.decrease = function () {
            this.pendingRequestNum--;
            if (this.pendingRequestNum <= 0) {
                this.pendingRequestNum = 0;
            }
        };
        return Controller;
    }());
    Controller.$inject = ['$scope', 'Api'];
    MNav.Controller = Controller;
})(MNav || (MNav = {}));
/// <reference path="d.ts/angularjs/angular.d.ts" />
/// <reference path="d.ts/kendo.all.d.ts" />
 
 
var Directive;
(function (Directive) {
    var PanelHeaderIn = (function () {
        function PanelHeaderIn() {
            this.scope = false;
            this.link = function ($scope, $element, $attrs, $ctrl, $transclude) {
                var collapse = $element.find('.collapse');
                var i = $element.find('i.z-collapse');
                collapse.on('show.bs.collapse', function () {
                    $scope.$apply(function () {
                        i.removeClass('fa fa-chevron-right');
                        i.addClass('fa fa-chevron-down');
                    });
                });
                collapse.on('hide.bs.collapse', function () {
                    i.removeClass('fa fa-chevron-down');
                    i.addClass('fa fa-chevron-right');
                });
            };
            this.restrict = 'EA';
            this.replace = false;
        }
        return PanelHeaderIn;
    }());
    Directive.PanelHeaderIn = PanelHeaderIn;
    var PopoverImpl = (function () {
        function PopoverImpl($scope, $attrs, $element) {
            this.$scope = $scope;
            this.$attrs = $attrs;
            this.$element = $element;
            this.isOpen = false;
            this.id = '#' + $attrs.id;
            if (Utils.notNullnotUndefined($attrs.zOptions)) {
                this.options = $scope[$attrs.zOptions];
            }
            else {
                this.options = {
                    html: true,
                    trigger: 'click',
                    placement: 'bottom',
                    container: 'body'
                };
            }
            var contentId = $attrs.zContentId;
            var content = $element.parent().find('#' + contentId);
            content.hide();
            this.options.content = function () {
                content.show();
                return content;
            };
            this.popover = $(this.id);
            this.popover.popover(this.options);
        }
        PopoverImpl.prototype.toggle = function () {
            if (!this.isOpen) {
                this.popover.popover('show');
            }
            else {
                this.popover.popover('hide');
            }
            this.isOpen = !this.isOpen;
        };
        return PopoverImpl;
    }());
    var Popover = (function () {
        function Popover() {
            this.scope = true;
            this.restrict = 'EA';
            this.replace = false;
            this.link = function ($scope, $element, $attrs, $ctrl, $transclude) {
                var parent = $scope.$parent;
                parent[$attrs.zPopover] = new PopoverImpl($scope, $attrs, $element);
            };
        }
        return Popover;
    }());
    Directive.Popover = Popover;
    var SearchBoxSchema = (function () {
        function SearchBoxSchema() {
        }
        return SearchBoxSchema;
    }());
    SearchBoxSchema.VALUE_TYPE_TEXT = "text";
    SearchBoxSchema.VALUE_TYPE_LIST = "list";
    SearchBoxSchema.VALUE_TYPE_TIMESTAMP = "timeStamp";
    Directive.SearchBoxSchema = SearchBoxSchema;
    var SearchCondition = (function () {
        function SearchCondition() {
        }
        SearchCondition.prototype.equals = function (obj) {
            return obj.name === this.name && obj.op === this.op && obj.value === this.value;
        };
        SearchCondition.prototype.setListValue = function (val) {
            this.type = SearchBoxSchema.VALUE_TYPE_LIST;
            this.listValue = val;
        };
        SearchCondition.prototype.setTextValue = function (val) {
            this.type = SearchBoxSchema.VALUE_TYPE_TEXT;
            this.value = val;
        };
        SearchCondition.prototype.setDateTimeValue = function (val) {
            this.type = SearchBoxSchema.VALUE_TYPE_TIMESTAMP;
            this.value = val;
        };
        SearchCondition.prototype.toQueryCondition = function () {
            var ret = new ApiHeader.QueryCondition();
            ret.name = this.name;
            ret.op = this.op;
            if (this.type == SearchBoxSchema.VALUE_TYPE_TEXT) {
                ret.value = this.value;
            }
            else if (this.type == SearchBoxSchema.VALUE_TYPE_LIST) {
                ret.value = this.listValue;
            }
            else if (this.type == SearchBoxSchema.VALUE_TYPE_TIMESTAMP) {
                ret.value = this.dateTimeValue;
            }
            return ret;
        };
        SearchCondition.prototype.hasValue = function () {
            if (this.type == SearchBoxSchema.VALUE_TYPE_TEXT) {
                return Utils.notNullnotUndefined(this.value);
            }
            else if (this.type == SearchBoxSchema.VALUE_TYPE_LIST) {
                return Utils.notNullnotUndefined(this.listValue);
            }
            else if (this.type == SearchBoxSchema.VALUE_TYPE_TIMESTAMP) {
                return Utils.notNullnotUndefined(this.dateTimeValue);
            }
        };
        return SearchCondition;
    }());
    var SearchBox = (function () {
        function SearchBox($compile) {
            var _this = this;
            this.$compile = $compile;
            this.conditions = {};
            this.scope = true;
            this.restrict = 'EA';
            this.replace = true;
            this.templateUrl = '/static/templates/directives/search.html';
            this.link = function ($scope, $element, $attrs, $ctrl, $transclude) {
                var instanceName = $attrs.zSearch;
                var parentScope = $scope.$parent;
                parentScope[instanceName] = _this;
                var options = parentScope[$attrs.zOptions];
                _this.$scope = $scope;
                _this.options = options;
                $scope.currentCondition = new SearchCondition();
                $scope.funcValueShow = function (type) {
                    var schema = _this.getSchema();
                    if (!Utils.notNullnotUndefined(schema)) {
                        return type == SearchBoxSchema.VALUE_TYPE_TEXT;
                    }
                    return schema.type == type;
                };
                $scope.valueListOptions__ = {};
                $scope.name = options.name;
                $scope.funcCancel = function () {
                    $scope.winSearch__.close();
                };
                $scope.funcSearch = function () {
                    var ret = [];
                    var tmp = {};
                    angular.forEach(_this.conditions, function (cond) {
                        if (cond.op != 'in' && cond.op != 'not in') {
                            if (cond.op == 'like' || cond.op == 'not like') {
                                cond.value = '%' + cond.value + '%';
                            }
                            ret.push(cond);
                        }
                        else {
                            var queue = tmp[cond.name];
                            if (!Utils.notNullnotUndefined(queue)) {
                                queue = {};
                                tmp[cond.name] = queue;
                            }
                            if (cond.op == 'in') {
                                var inq = queue['in'];
                                if (!Utils.notNullnotUndefined(inq)) {
                                    inq = [];
                                    queue['in'] = inq;
                                }
                                inq.push(cond.value);
                            }
                            else {
                                var notinq = queue['not in'];
                                if (!Utils.notNullnotUndefined(notinq)) {
                                    notinq = [];
                                    queue['not in'] = notinq;
                                }
                                notinq.push(cond.value);
                            }
                        }
                    });
                    for (var k in tmp) {
                        var queue = tmp[k];
                        var inq = queue['in'];
                        if (Utils.notNullnotUndefined(inq)) {
                            ret.push({
                                name: k,
                                op: 'in',
                                value: inq.join()
                            });
                        }
                        var notinq = queue['not in'];
                        if (Utils.notNullnotUndefined(notinq)) {
                            ret.push({
                                name: k,
                                op: 'not in',
                                value: notinq.join()
                            });
                        }
                    }
                    if (Utils.notNullnotUndefined(_this.options.done)) {
                        _this.options.done(ret);
                    }
                    $scope.winSearch__.close();
                };
                $scope.funcCanAdd = function () {
                    if ($scope.currentCondition.op != 'is null' && $scope.currentCondition.op != 'is not null') {
                        return Utils.notNullnotUndefined($scope.currentCondition.name) && Utils.notNullnotUndefined($scope.currentCondition.op)
                            && $scope.currentCondition.hasValue();
                    }
                    else {
                        return Utils.notNullnotUndefined($scope.currentCondition.name) && Utils.notNullnotUndefined($scope.currentCondition.op);
                    }
                };
                $scope.funcCanConditionsShow = function () {
                    return !Utils.isEmptyObject(_this.conditions);
                };
                $scope.duplicateCondition = false;
                $scope.funcAddCondition = function () {
                    $scope.duplicateCondition = false;
                    var cur = $scope.currentCondition;
                    for (var k in _this.conditions) {
                        var c = _this.conditions[k];
                        if (c.name == cur.name && c.op == cur.op && c.value == cur.value) {
                            $scope.duplicateCondition = true;
                            return;
                        }
                    }
                    _this.conditions[Utils.uuid()] = $scope.currentCondition.toQueryCondition();
                    _this.newCurrentCondition();
                };
                $scope.optionsSearch__ = {
                    width: "680px",
                    animation: false,
                    resizable: false
                };
                $scope.valueTimestampOptions__ = {
                    value: null,
                    format: 'yyyy-MM-dd HH:mm:ss',
                    timeFormat: "HH:mm"
                };
                $scope.valueListOptions__ = {
                    dataSource: {
                        data: []
                    }
                };
                var fieldNames = [];
                fieldNames = fieldNames.concat(options.fields);
                fieldNames.push(SearchBox.USER_TAG_CONDITION_NAME);
                _this.fieldNames = fieldNames;
                $scope.optionsField = {
                    dataSource: new kendo.data.DataSource({
                        data: fieldNames
                    }),
                    change: function (e) {
                        var list = e.sender;
                        Utils.safeApply($scope, function () {
                            $scope.currentCondition.name = list.value();
                            if ($scope.currentCondition.name === SearchBox.USER_TAG_CONDITION_NAME) {
                                $scope.optionsOp.setData(SearchBox.TAG_OPS);
                            }
                            else {
                                $scope.optionsOp.setData(SearchBox.OPS);
                            }
                            var schema = _this.getSchema();
                            if (!Utils.notNullnotUndefined(schema) || schema.type == SearchBoxSchema.VALUE_TYPE_TEXT) {
                                $scope.currentCondition.setTextValue($scope.currentCondition.value);
                            }
                            else if (schema.type == SearchBoxSchema.VALUE_TYPE_LIST) {
                                $scope.valueList__.dataSource.data(schema.list);
                                $scope.currentCondition.setListValue(schema.list[0]);
                            }
                            else if (schema.type == SearchBoxSchema.VALUE_TYPE_TIMESTAMP) {
                                $scope.currentCondition.setDateTimeValue($scope.currentCondition.dateTimeValue);
                            }
                        });
                    }
                };
                $scope.optionsOp = {
                    dataSource: new kendo.data.DataSource({
                        data: SearchBox.OPS
                    }),
                    setData: function (data) {
                        $scope.optionsOp.dataSource.data(data);
                        $scope.currentCondition.op = data[0];
                    },
                    change: function (e) {
                        var list = e.sender;
                        Utils.safeApply($scope, function () {
                            $scope.currentCondition.op = list.value();
                        });
                    }
                };
                $scope.$watch(function () {
                    return _this.conditions;
                }, function () {
                    for (var k in _this.conditions) {
                        var c = _this.conditions[k];
                        if (c.op != '=') {
                            continue;
                        }
                        var schema = _this.options.schema[c.name];
                        if (!Utils.notNullnotUndefined(schema)) {
                            continue;
                        }
                        if (!Utils.notNullnotUndefined(schema.getQueryableFields)) {
                            continue;
                        }
                        var newFieldNames = [];
                        newFieldNames = newFieldNames.concat(schema.getQueryableFields(c.value));
                        newFieldNames.push(SearchBox.USER_TAG_CONDITION_NAME);
                        $scope.optionsField.dataSource.data(newFieldNames);
                        return;
                    }
                    $scope.optionsField.dataSource.data(fieldNames);
                    if (Utils.notNullnotUndefined($scope.fieldCombo__)) {
                        $scope.fieldCombo__.value(fieldNames[0]);
                    }
                }, true);
                $scope.funcRemoveCondition = function (uuid) {
                    var cond = _this.conditions[uuid];
                    var schema = _this.options.schema[cond.name];
                    if (!Utils.notNullnotUndefined(schema) || !Utils.notNullnotUndefined(schema.removeCascade)) {
                        delete _this.conditions[uuid];
                        return;
                    }
                    for (var k in schema.removeCascade) {
                        if (k != cond.name) {
                            continue;
                        }
                        angular.forEach(schema.removeCascade[k], function (cascadeField) {
                            for (var ck in _this.conditions) {
                                var cv = _this.conditions[ck];
                                if (cv.name == cascadeField) {
                                    delete _this.conditions[ck];
                                }
                            }
                        });
                    }
                    delete _this.conditions[uuid];
                };
                var conditionTable = $element.find('#conditionTable');
                $scope.$watch(function () {
                    return _this.conditions;
                }, function () {
                    angular.forEach(conditionTable.children(), function (child) {
                        child.remove();
                    });
                    if (Utils.isEmptyObject(_this.conditions)) {
                        return;
                    }
                    var header = '<tr><th class="z-label">CONDITIONS</th><th></th></tr>';
                    header = $compile(header)($scope);
                    conditionTable.append(header);
                    angular.forEach(_this.conditions, function (cond, uuid) {
                        var tr = '<tr>'
                            + '<td>'
                            + '<span class="z-search-condition">' + cond.name + '</span>'
                            + '<span class="z-search-condition">' + cond.op + '</span>'
                            + '<span class="z-search-condition">' + cond.value + '</span>'
                            + '</td>'
                            + '<td><button type="button" class="btn btn-xs btn-danger pull-right" ng-click="funcRemoveCondition(\'' + uuid + '\')"><i class="fa fa-minus"></i></button></td>'
                            + '</tr>';
                        tr = $compile(tr)($scope);
                        conditionTable.append(tr);
                    });
                }, true);
            };
        }
        SearchBox.prototype.newCurrentCondition = function () {
            this.$scope.currentCondition = new SearchCondition();
            this.$scope.currentCondition.name = this.$scope.fieldCombo__.value();
            this.$scope.currentCondition.op = this.$scope.opDropdown__.value();
            var schema = this.getSchema();
            if (Utils.notNullnotUndefined(schema)) {
                if (schema.type == SearchBoxSchema.VALUE_TYPE_LIST) {
                    this.$scope.currentCondition.setListValue(this.$scope.valueList__.value());
                }
                else if (schema.type == SearchBoxSchema.VALUE_TYPE_TIMESTAMP) {
                    this.$scope.valueDateTime__.value(null);
                    this.$scope.currentCondition.setDateTimeValue(null);
                }
                else {
                    this.$scope.currentCondition.setTextValue(null);
                }
            }
            else {
                this.$scope.currentCondition.setTextValue(null);
            }
        };
        SearchBox.prototype.open = function () {
            this.conditions = {};
            this.newCurrentCondition();
            this.$scope.optionsField.dataSource.data(this.fieldNames);
            this.$scope.fieldCombo__.value(this.fieldNames[0]);
            this.$scope.winSearch__.center();
            this.$scope.winSearch__.open();
        };
        SearchBox.prototype.getSchema = function () {
            return this.options.schema[this.$scope.currentCondition.name];
        };
        return SearchBox;
    }());
    SearchBox.OPS = ["=", "!=", ">", "<", ">=", "<=", "in", "not in", "is null", "is not null", "like", "not like"];
    SearchBox.TAG_OPS = ['in', 'not in'];
    SearchBox.USER_TAG_CONDITION_NAME = '__userTag__';
    Directive.SearchBox = SearchBox;
    var GridDoubleClick = (function () {
        function GridDoubleClick() {
            this.scope = false;
            this.restrict = 'EA';
            this.replace = false;
            this.link = function ($scope, $element, $attrs, $ctrl, $transclude) {
                var method = $scope[$attrs.zGridDoubleClick];
                var grid = $($element);
                grid.delegate("tbody>tr", "dblclick", function (e) {
                    Utils.safeApply($scope, function () {
                        if (Utils.notNullnotUndefined(method)) {
                            method(e);
                        }
                    });
                });
            };
        }
        return GridDoubleClick;
    }());
    Directive.GridDoubleClick = GridDoubleClick;
    var SortByData = (function () {
        function SortByData() {
        }
        SortByData.prototype.isValid = function () {
            return Utils.notNullnotUndefined(this.field);
        };
        SortByData.prototype.toString = function () {
            if (!this.isValid()) {
                return 'Sort By';
            }
            return Utils.sprintf('{0}:{1}', this.field, this.direction);
        };
        return SortByData;
    }());
    Directive.SortByData = SortByData;
    var SortBy = (function () {
        function SortBy() {
            this.scope = true;
            this.restrict = 'EA';
            this.replace = true;
            this.templateUrl = "/static/templates/directives/sort.html";
            this.link = function ($scope, $element, $attrs, $ctrl, $transclude) {
                $scope.funcShow = function (popover) {
                    popover.toggle();
                };
                var parent = $scope.$parent;
                var options = parent[$attrs.zOptions];
                var fields = [
                    {
                        name: SortBy.NO_SORT_BY_NAME,
                        value: '__null__'
                    }
                ];
                fields = fields.concat(options.fields);
                $scope.optionsSortBy__ = {
                    dataSource: new kendo.data.DataSource({
                        data: fields
                    }),
                    dataTextField: 'name',
                    dataValueField: 'value'
                };
                $scope.field = fields[0].value;
                $scope.direction = "desc";
                $scope.buttonName = "Sort By";
                $scope.funcSortByConfirm = function (popover) {
                    popover.toggle();
                    var ret = new SortByData();
                    ret.direction = $scope.direction;
                    ret.field = $scope.field == '__null__' ? null : $scope.field;
                    $scope.buttonName = ret.toString();
                    options.done(ret);
                };
            };
        }
        return SortBy;
    }());
    SortBy.NO_SORT_BY_NAME = '-- No Sort --';
    Directive.SortBy = SortBy;
    var DeleteConfirmOptions = (function () {
        function DeleteConfirmOptions() {
        }
        return DeleteConfirmOptions;
    }());
    Directive.DeleteConfirmOptions = DeleteConfirmOptions;
    var DeleteConfirmImpl = (function () {
        function DeleteConfirmImpl($scope, $attrs, $element) {
            this.$scope = $scope;
            var options = $scope.$parent[$attrs.zOptions];
            $scope.optionsDelete__ = {
                animation: false,
                modal: true,
                draggable: false,
                resizable: false,
                width: "500px"
            };
            $scope.title = options.title;
            $scope.description = options.description;
            if (Utils.notNullnotUndefined(options.html)) {
                var desc = $element.find('#description');
                var el = $(options.html);
                desc.append(el);
            }
            $scope.confirm = function () {
                options.confirm();
                $scope.winDelete__.close();
            };
            $scope.cancel = function () {
                var c = options.cancel;
                if (Utils.notNullnotUndefined(c)) {
                    c();
                }
                $scope.winDelete__.close();
            };
        }
        DeleteConfirmImpl.prototype.open = function () {
            this.$scope.ok = null;
            this.$scope.winDelete__.center();
            this.$scope.winDelete__.open();
        };
        return DeleteConfirmImpl;
    }());
    var DeleteConfirm = (function () {
        function DeleteConfirm() {
            this.scope = true;
            this.replace = true;
            this.restrict = 'EA';
            this.templateUrl = '/static/templates/directives/deleteConfirm.html';
            this.link = function ($scope, $element, $attrs, $ctrl, $transclude) {
                $scope.$parent[$attrs.zDeleteConfirm] = new DeleteConfirmImpl($scope, $attrs, $element);
            };
        }
        return DeleteConfirm;
    }());
    Directive.DeleteConfirm = DeleteConfirm;
    var ConfirmBoxImpl = (function () {
        function ConfirmBoxImpl($scope, $attrs, $element) {
            this.$scope = $scope;
            var options = this.options = $scope.$parent[$attrs.zOptions];
            $scope.optionsConfirmBox__ = {
                animation: false,
                modal: true,
                draggable: false,
                resizable: false,
                width: Utils.notNullnotUndefined(options.width) ? options.width : '500px'
            };
            $scope.btnType = Utils.notNullnotUndefined(options.btnType) ? options.btnType : 'btn-primary';
            $scope.title = options.title;
            if (Utils.notNullnotUndefined(options.html)) {
                var desc = $element.find('#description');
                var el = $(options.html);
                desc.append(el);
            }
            $scope.confirm = function () {
                options.confirm();
                $scope.confirmBox__.close();
            };
            $scope.canProceed = function () {
                if (Utils.notNullnotUndefined(options.canProceed)) {
                    return options.canProceed();
                }
                return true;
            };
            $scope.cancel = function () {
                var c = options.cancel;
                if (Utils.notNullnotUndefined(c)) {
                    c();
                }
                $scope.confirmBox__.close();
            };
        }
        ConfirmBoxImpl.prototype.open = function () {
            if (Utils.notNullnotUndefined(this.options.description)) {
                this.$scope.description = this.options.description();
            }
            this.$scope.confirmBox__.center();
            this.$scope.confirmBox__.open();
        };
        return ConfirmBoxImpl;
    }());
    var ConfirmBox = (function () {
        function ConfirmBox() {
            this.scope = true;
            this.restrict = 'EA';
            this.replace = true;
            this.templateUrl = '/static/templates/directives/confirmBox.html';
            this.link = function ($scope, $element, $attrs, $ctrl, $transclude) {
                $scope.$parent[$attrs.zConfirm] = new ConfirmBoxImpl($scope, $attrs, $element);
            };
        }
        return ConfirmBox;
    }());
    Directive.ConfirmBox = ConfirmBox;
})(Directive || (Directive = {}));
angular.module('root')
    .directive("zPanelHeaderIn", function () {
    return new Directive.PanelHeaderIn();
}).directive('zPopover', function () {
    return new Directive.Popover();
}).directive('zSearch', ['$compile', function ($compile) {
        return new Directive.SearchBox($compile);
    }]).directive('zGridDoubleClick', function () {
    return new Directive.GridDoubleClick();
}).directive('zSortBy', function () {
    return new Directive.SortBy();
}).directive('zDeleteConfirm', function () {
    return new Directive.DeleteConfirm();
}).directive('zConfirm', function () {
    return new Directive.ConfirmBox();
}).filter('size', [function () {
        return Utils.toSizeString;
    }]).filter('VCPU', [function () {
        return Utils.toVCPUString;
    }]).filter('percent', [function () {
        return Utils.toPercentageString;
    }]).filter('commas', [function () {
        return Utils.commaString;
    }]);
